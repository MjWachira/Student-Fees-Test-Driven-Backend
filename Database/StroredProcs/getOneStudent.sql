CREATE OR ALTER PROCEDURE getOneStudent (@id VARCHAR(200))
AS  
    BEGIN 
        SELECT * FROM studentsTable WHERE id = @id
    END