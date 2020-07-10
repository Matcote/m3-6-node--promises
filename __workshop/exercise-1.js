// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (
      array.every((string) => {
        return typeof string === "string";
      })
    ) {
      resolve(
        array.map((string) => {
          let newString = string.toUpperCase();
          return newString;
        })
      );
    } else {
      reject("ERROR!");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    resolve(array.sort());
  });
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
