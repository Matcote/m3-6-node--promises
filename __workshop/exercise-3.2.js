// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  // return something...
  return opencage.geocode(requestObj).then((data) => data.results[0].geometry);
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));
getPositionFromAddress(
  "5200 Avenue Rosedale, Montréal, QC H4V 2H6"
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
