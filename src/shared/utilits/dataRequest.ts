export const dataRequest = async () => {
  const baseUrl = "https://table-server-jptw.onrender.com";
  const domid = window.location.hostname;
  const countryCodeRequest = await fetch(`${baseUrl}/table/${domid}`);
  const codeData = await countryCodeRequest.json();
  const countryCode = codeData?.countryCode ? codeData?.countryCode : "PT";

  const response = await fetch(
    `${baseUrl}/casinos/website/country_code/${countryCode}`
  );

  const data = await response.json();
  return data;
};
