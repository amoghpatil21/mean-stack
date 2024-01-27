const EmployeeModel = require('./Employee.model');


exports.getEmployee = (req, res, next) => 
{
    EmployeeModel.find().then((Employee) =>
    {
        res.status(200).json
        ({
            Employee:Employee,
        });
    }).catch((err) =>
    {
        res.status(500).json
        ({
            error:err,
        })
    })
}
exports.createEmployee = (req, res, next) => {
    
    const newEmployee = new EmployeeModel({firstName: req.body.firstName,lastName:req.body.lastName});
    newEmployee
    .save()
    .then((result) => { 
        res.status(201).json({
            Employee: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}
exports.getEmployeeById = (req, res, next) => {
    EmployeeModel.findById(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};
exports.getEmployeeById = (req, res, next) => {
    EmployeeModel.findByIdAndDelete(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};
