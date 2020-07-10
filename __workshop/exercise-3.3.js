// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "e2c57ffd46ce4b39b729d2794f610b2b",
    q: `${lat}+${lng}`,
  };

  // return ...
  return opencage.geocode(requestObj).then((data) => data.results[0].formatted);
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
