CREATE OR ALTER PROCEDURE updateStudent
 (@id VARCHAR(200),
@student_name  VARCHAR(500),
@class_name VARCHAR(1000),
@fee_balance VARCHAR(200), 
@deadline DATE)
AS
    BEGIN
        UPDATE studentsTable SET id= @id, 
        student_name = @student_name,
        class_name=@class_name, 
        fee_balance = @fee_balance,
        deadline = @deadline
         WHERE id= @id
    END

