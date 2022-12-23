const mongodb = require("../config/mongodb");

module.exports.add = (employee, cb) => {
  // 1. Get the collection.
  const collection = mongodb.getCollection("employees");
  // 2. Call insertOne function and pass the document.
  collection
    .insertOne({
      name: employee.name,
      email: employee.email,
    })
    .then((res) => {
      cb(null, "Document is inserted");
    })
    .catch((err) => {
      cb(err, null);
    });
};
