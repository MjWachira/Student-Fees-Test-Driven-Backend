const{Router}=require('express');
const { AddStudents, AllStudents, OneStudent, updateStudents, deleteStudent} = require('../Controllers/studentController');

const studentRouter =Router();

studentRouter.post('/',AddStudents)
studentRouter.get('/',AllStudents)
studentRouter.get('/:id',OneStudent)
studentRouter.put('/:id',updateStudents)
studentRouter.delete('/:id',deleteStudent)
module.exports={
    studentRouter
}