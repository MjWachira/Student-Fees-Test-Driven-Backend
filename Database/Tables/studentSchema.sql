 BEGIN
        TRY 
            CREATE TABLE studentsTable(
                id VARCHAR(200) PRIMARY KEY,
                student_name VARCHAR(500) NOT NULL,
                class_name VARCHAR(10) NOT NULL,
                fee_balance VARCHAR(200) NOT NULL,
                deadline DATE NOT NULL
            )
        END TRY
BEGIN 
    CATCH 
        THROW 50001,'Table already exists!',1;
    END CATCH

    DROP TABLE studentsTable

            
            

