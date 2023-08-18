CREATE OR ALTER PROCEDURE addStudentPROC(
@id VARCHAR(200),
@student_name  VARCHAR(500),
@class_name VARCHAR(1000),
@fee_balance VARCHAR(200), 
@deadline DATE)
AS
BEGIN
    INSERT INTO studentsTable(id, student_name, 
                class_name, fee_balance, deadline) 
    VALUES (@id, @student_name, @class_name, 
                @fee_balance, @deadline)
END

SELECT * FROM studentsTable

