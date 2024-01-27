var express = require('express');
var router = express.Router();
const EmployeeController = require('./employee.controller')

router.get('/', EmployeeController.getEmployee);

router.post('/', EmployeeController.createEmployee);

router.get('/:id', EmployeeController.getEmployeeById);

router.delete('/:id',EmployeeController.getEmployeeById);

module.exports = router;