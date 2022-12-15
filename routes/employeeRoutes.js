
const express = require("express");
const controller = require("../controllers/employeeController");

const router = express.Router();

router.post("/", controller.createEmployee);
router.get("/", controller.getEmployee);
router.get("/:id", controller.getEmployeeById);
router.put("/", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);
module.exports.router = router;