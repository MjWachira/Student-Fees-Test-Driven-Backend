const mssql = require('mssql')
const { sqlConfig } = require('../../Config/config')

const createStudentsTable = async (res,req)=>{
    try{
        const table = `
        BEGIN
        TRY 
            CREATE TABLE projectsTable(
                id VARCHAR(200) PRIMARY KEY,
                student_name VARCHAR(500) NOT NULL,
                class VARCHAR(10) NOT NULL,
                fee_balance VARCHAR(200) NOT NULL,
                deadline DATE NOT NULL
            )
        END TRY
    BEGIN 
    CATCH 
        THROW 50001,'Table already exists!',1;
    END CATCH`;

        const pool = await mssql.connect(sqlConfig)

        await pool.query(table, (err)=>{
            if(err instanceof mssql.RequestError){
                console.log({Error:err.message});

            }else{
                console.log('Table created successfully');
            }
        })
    }catch(error){
        return res({error})
    }
}
createProjectsTable()

module.exports={
    //createProjectsTable
}