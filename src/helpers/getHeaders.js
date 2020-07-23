const http = require("http");
const https = require("https");
const url = require("url");

function getHeaders(myURL) {
  const parsedURL = url.parse(myURL);
  const options = {
    protocol: parsedURL.protocol,
    hostname: parsedURL.hostname,
    method: "HEAD",
    path: parsedURL.path,
  };
  let protocolHandler = parsedURL.protocol === "https:" ? https : http;

  return new Promise((resolve, reject) => {
    let req = protocolHandler.request(options, (res) => {
      resolve(res.headers);
    });
    req.on("error", (e) => {
      reject(e);
    });
    req.end();
  });
}

module.exports = getHeaders;