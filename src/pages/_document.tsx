import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <link
          rel="icon"
          href="/Real Gaming Deals-favicon.svg"
          type="image/svg+xml"
        />
        <link rel="shortcut icon" href="/Real Gaming Deals-favicon.svg" />
        <meta
          name="description"
          content="Real Gaming Deals - تجربة ألعاب الأركيد الفريدة في دولة الإمارات! استمتع بألعاب الأركيد الكلاسيكية وأفضل تجربة ألعاب في دولة الإمارات."
        />
        <meta
          name="keywords"
          content="ألعاب الأركيد, الكلاسيكية, باك مان, تتريس, غزاة الفضاء, ألعاب, الإمارات"
        />
        <meta name="author" content="Real Gaming Deals" />
        <meta
          property="og:title"
          content="Real Gaming Deals - تجربة ألعاب الأركيد"
        />
        <meta
          property="og:description"
          content="تجربة ألعاب الأركيد الفريدة في دولة الإمارات! استمتع بألعاب الأركيد الكلاسيكية وأفضل تجربة ألعاب في دولة الإمارات."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Real Gaming Deals-logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Real Gaming Deals - تجربة ألعاب الأركيد"
        />
        <meta
          name="twitter:description"
          content="تجربة ألعاب الأركيد الفريدة في دولة الإمارات! استمتع بألعاب الأركيد الكلاسيكية وأفضل تجربة ألعاب في دولة الإمارات."
        />
        {/*       <Script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js"
        ></Script> */}
        <meta name="twitter:image" content="/Real Gaming Deals-logo.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
