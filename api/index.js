const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
    .connect('mongodb+srv://zahid:zahid@cluster0.oga3y0a.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log("Error connecting to MongoDB", error)
})

app.listen(port, () => {
    console.log("Server is running on port 8000");
})

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//endpoint to register an employee
app.post("/addEmployee", async (req, res) => {
    try {
        const {
            employeeName,
            employeeID,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address
        } = req.body;

        //create new employee
        const newEmployee = new Employee({
            employeeName,
            employeeID,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address
        })

        await newEmployee.save();

        res.status(201).json({ message: "Employeee saved successfully" });

    } catch (error) {
        console.log("Error creating employee", error);
        res.status(500).json({ message: "Failed to add an employee" });
    }
});

//endpoint to fetch all the employees
app.get("/employees", async(req,res) => {
    try{
        const employee = await Employee.find();
        res.status(200).json(employees);
    } catch(error){
        res.status(500).json({message:"Failed to retrieve employees"})
    }
})