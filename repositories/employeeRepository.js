const mongodb = require("../config/mongodb");
const { ObjectId } = require("mongodb");

module.exports.add = (employee, cb) => {
  // 1. Get the collection.
  const collection = mongodb.getCollection("employees");
  // 2. Call insertOne function and pass the document.

  //3. to insert document we have 2 method
  // 1.1 insertOne

  // 1.2 insertMany
  collection
    .insertMany([
      {
        name: employee.employees[0].name,
        email: employee.employees[0].email,
      },
      {
        name: employee.employees[1].name,
        email: employee.employees[1].email,
      },
    ])
    .then((res) => {
      cb(null, "Document is inserted");
    })
    .catch((err) => {
      cb(err, null);
    });
  // console.log(employee);
};
module.exports.getAll = (cb) => {
  const collection = mongodb.getCollection("employees");
  // find is used to get all docs
  collection
    .find()
    .toArray()
    .then((docs) => {
      cb(docs);
    });
};
module.exports.getById = (id, cb) => {
  const collection = mongodb.getCollection("employees");
  // find is used to get all docs
  collection
    .find({ _id: ObjectId(id) })
    .toArray()
    .then((docs) => {
      cb(docs);
    });
};
module.exports.getbyEmail = (email, cb) => {
  const collection = mongodb.getCollection("employees");
  console.log(email);
  // find is used to get all docs
  collection
    .find({ email: email })
    .toArray()
    .then((docs) => {
      cb(docs);
    });
};
module.exports.update = (employee, cb) => {
  const collection = mongodb.getCollection("employees");
  collection
    .findOneAndUpdate(
      { _id: ObjectId(employee._id) },
      { $set: { name: employee.name, email: employee.email } }
    )
    .then((res) => {
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(employee);
};

module.exports.delete = (id, cb) => {
  const collection = mongodb.getCollection("employees");
  collection
    .deleteOne({ _id: ObjectId(id) })
    .then((res) => {
      console.log(res);
      if (res.deletedCount == 0) {
        cb("No such employee");
      } else {
        cb();
      }
    })
    .catch((err) => {
      cb(err);
    });
};
