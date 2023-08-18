const {v4} = require('uuid');
const mssql = require('mssql');
const { sqlConfig } = require('../Config/config');


const AddStudents = async (req, res)=>{
    try {
        const id = v4()

        const { student_name, class_name, fee_balance, deadline} = req.body

        const pool = await mssql.connect(sqlConfig)

        // if(pool.connected){
        const result = await pool.request()
        .input('id', mssql.VarChar, id)
        .input('student_name', mssql.VarChar, student_name)
        .input('class_name', mssql.VarChar, class_name)
        .input('fee_balance', mssql.VarChar, fee_balance)
        .input('deadline', mssql.Date, deadline)
        .execute('addStudentPROC')
        console.log(result)

        if(result.rowsAffected[0] == 1){
        return res.json({
            message: "student added successfully"
        
        })  
        }else{
            return res.json({message: "creation failed"})
        }   
    // }
    } catch(error){
        return res.json({error})
    }
}

const AllStudents = async(req, res)=>{
    try{
        const pool = await (mssql.connect(sqlConfig))
        const allStudents = (await pool.request().execute('allStudents')).recordset
        res.json({students: allStudents})

    }catch(error){
        return res.json({error})
    }
}

module.exports={
    AddStudents,
    AllStudents
}