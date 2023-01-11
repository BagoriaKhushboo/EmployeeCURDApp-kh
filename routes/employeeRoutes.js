const express = require("express");
const controller = require("../controllers/employeeController");

const router = express.Router();

router.post("/", controller.createEmployee);
router.get("/", controller.getEmployee);
router.get("/salary/", controller.getBySalary);
router.get("/it/", controller.getITEmployees);
router.get("/page/:page", controller.lazyLoad);
router.get("/:id", controller.getEmployeeById);
router.get("/email/:email", controller.getEmployeeByEmail);
router.put("/", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);
module.exports.router = router;
