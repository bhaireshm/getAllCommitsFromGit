const request = require("request");

request.get(
  "https://api.github.com/repos/bhaireshm/custom-xml2json/commits",
  {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  },
  (err, result) => {
    console.log(result);
  }
);
