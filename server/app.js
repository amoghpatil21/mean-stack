var express = require('express');
    var employeesRouter = require('./api/employee/employee.route');
var usersRouter = require('./api/employee/users/user.route');
require('dotenv').config();
var app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB).then(()=>
{
  console.log('Data base mongoose.connection Established');
}).catch((error)=>
{
  console.log(error);
  console.log('Error in connection Mongodb')
})



app.use((req, res ,next)=>
{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*')
  next();
}
)


app.use('/Employee', employeesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
