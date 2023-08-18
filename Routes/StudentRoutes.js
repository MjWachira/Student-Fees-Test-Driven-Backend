const{Router}=require('express');
const { AddStudents, AllStudents } = require('../Controllers/studentController');

const studentRouter =Router();

studentRouter.post('/',AddStudents)
studentRouter.get('/',AllStudents)


module.exports={
    studentRouter
}