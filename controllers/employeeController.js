const repo = require("../repositories/employeeRepository");
const employees = [];

// localhost:4200/api/Employee - POST
module.exports.createEmployee = (req, res) => {
  // read employee data from request object.
  console.log("Creating employee..");
  let employee = req.body;
  repo.add(employee, (err, msg) => {
    if (!err) {
      return res.status(200).send(msg);
    } else {
      return res.status(400).send(err);
    }
  });
};

module.exports.getEmployee = (req, res) => {
  return res.status(200).send(employees);
};

module.exports.getEmployeeById = (req, res) => {
  const id = req.params.id; //to get the data using url not by body(whatever we use here that used in router path ex:-id, name could be anything)
  console.log(id);
  const employee = employees.find((e) => e.id == id);
  if (!employee) {
    return res.status(404).send("No such employee");
  }
  return res.status(200).send(employee);
};

module.exports.updateEmployee = (req, res) => {
  const employee = req.body;
  const index = employees.findIndex((e) => e.id == employee.id);
  if (index < 0) {
    return res.status(404).send("Invalid employee Id please select valid Id");
  } else {
    employees[index] = employee;
  }
  return res.status(200).send("Employee Updated");
};

module.exports.deleteEmployee = (req, res) => {
  const id = req.params.id;
  const index = employees.findIndex((e) => (e.id = id));
  if (index < 0) {
    return res.status(400).send("Invalid Employee");
  } else {
    employees.splice(index, 1);
  }
  return res.status(200).send("Employee Deleted");
};
