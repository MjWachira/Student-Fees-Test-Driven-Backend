CREATE OR ALTER PROCEDURE deleteStudent (@id VARCHAR(200))
AS
BEGIN 
    DELETE FROM studentsTable WHERE id=@id
END