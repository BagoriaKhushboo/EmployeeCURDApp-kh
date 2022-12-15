
// 1. To create and configure server.
const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const employeeRoute = require("./routes/employeeRoutes");

server.listen(4200);

// intercept every request and parse body of request into json format.
server.use(bodyParser.json());

// localhost:4200/api/employee/
server.use("/api/employee", employeeRoute.router)

// 2. Listen for a default request.
// localhost:4200
server.get("/", (req, res)=>{
    res.send("Welcome to Employee CRUD API");
});

console.log("Server is listening on port 4200");