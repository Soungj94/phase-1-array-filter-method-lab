// Code your solution here
// index.js
//     findMatching()
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match

function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toUpperCase() === name.toUpperCase()
  );
}
//     fuzzyMatch()
//       4) returns a driver if beginning provided letters match
//       5) does not return drivers if only middle or ending letters match
//       6) does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, name) {
  return drivers.filter(
    (driver) =>
      driver.slice(0, name.length).toLowerCase() === name.toLowerCase()
  );
}
//     matchName()
//       7) accesses the data structure to check if name matches
function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
