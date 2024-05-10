const express = require("express");
require("./db/connection")
const Student = require("../models/student");
const router = new express.Router();


router.post("/students",(req,res)=>{
    const user = new Student(req.body)
    console.log(req.body);
    user.save()
    .then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(401).send(e);
    })
})


router.get("/students",async(req,res)=>{

    try{
       const studdata = await Student.find();
       res.send(studdata);
    }
    catch(err){
        res.send(err);
    }
})





router.get("/students/:name",async(req,res)=>{
    const name=req.params.name;
    try{
       const student = await Student.findOne({name});
       console.log(student);
       if (!student) {
                return res.status(404).send({ error: "Student not found." });
              }

        res.send(student);
       
    }
    catch(err){
        res.send(err);
    }
})






router.patch("/students/:name", async (req, res) => {
    const name = req.params.name;
    try {
        const updatedStudent = await Student.findOneAndUpdate({ name }, req.body, {
            new: true, // Return the updated document
            runValidators: true // Validate the updated document
        });
        if (!updatedStudent) {
            return res.status(404).send({ error: "Student not found." });
        }
        res.send(updatedStudent);
    } catch (err) {
        res.status(500).send({ error: "Internal server error." });
    }
});





router.delete("/student/:name", async (req, res) => {
    const name = req.params.name;
    try {   
        const deletedStudent = await Student.findOneAndDelete({ name });
        if (!deletedStudent) {
            return res.status(404).send({ error: "Student not found." });
        }
        res.send(deletedStudent);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal server error." });
    }
});



module.exports =router;