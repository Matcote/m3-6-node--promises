// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
const { get } = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((location) => location.iss_position)
    .then((final) => {
      return { lat: Number(final.latitude), lng: Number(final.longitude) };
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };
