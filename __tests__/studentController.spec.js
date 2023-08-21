import { request } from "supertest";
import mssql from "mssql"
import { AddStudents, AllStudents, OneStudent, deleteStudent } from "../Controllers/studentController";

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe("Student Controller", ()=>{

    describe("adding a student ", ()=>{
        it("should create a user successfully", async()=> {
            const Id="etd62737366363"
            const newStudent={
                student_name: "John Wachira",
                class: "4w",
                fee_balance:"Ksh 25000",
                deadline: "2023/7/25"
                
        }
        const req = {
            params:{id:Id},
            body:newStudent
        }
        
        jest.spyOn(mssql, "connect").mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({
                rowsAffected:[1] 
            })

        })
        await AddStudents(req,res)
        expect(res.json).toHaveBeenCalledWith({
                message: "student added successfully"
            })
    
        })
    })
    it("should create a User successfully", async()=> {
        const Id="etd62737366363"
        const newStudent={
            student_name: "John Wachira",
            class: "4w",
            fee_balance:"Ksh 25000",
            deadline: "2023/7/25"
            
        }
        const req = {
            params:{id:Id},
            body:newStudent
        }
        
        jest.spyOn(mssql, "connect").mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({
               rowsAffected: [0]
            })

        })
        await AddStudents(req,res)
        expect(res.json).toHaveBeenCalledWith({
            message: "creation failed"
         })
    
    })
    describe("Gets all Students", ()=>{
        it("should return all students" , async()=>{
            const mockStudent = [
                {
                  id: '1464dda6-5651-4d3c-8c1c-527d977e15d8',
                  student_name: "John Wachira",
                  class: "4w",
                  fee_balance:"Ksh 25000",
                  deadline: "2023/7/25"
                }]
            const req = {}

            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                request: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    recordset:mockStudent
                })
            })

            await AllStudents(req, res)            
            expect(res.json).toHaveBeenCalledWith({students: mockStudent})
        })
    })
    describe("Getting Project By ID", ()=>{
        it ("should return the specified project", async()=>{
            const ID = 'gkkrfkmeot53k9iwejai945349964'
            const mockStudent = {
                id: '1464dda6-5651-4d3c-8c1c-527d977e15d8',
                student_name: "John Wachira",
                class: "4w",
                fee_balance:"Ksh 25000",
                deadline: "2023/7/25"
              }

            const req = {
                params: {
                    id: ID
                }
            }

            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    recordset: [mockStudent]
                })
            })
            await OneStudent(req, res)

            expect(res.json).toHaveBeenCalledWith({project: [mockProject]})
        })

    })

describe("Deleting a student", ()=>{
        it("should delete the student successfully", async()=>{
            const ID = 'nrnfgnjrnjnnrfd5434'
            const req = {
                params:{
                    id:ID
                }
            }

            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    rowsAffected: [1]
                })
            })

            await deleteStudent(req, res)

            expect(res.json).toHaveBeenCalledWith({
                message: 'Student deleted successfully'
            })
        })

        it("should return an error 'project not found'", async()=>{
            const projectID = 'fhgh2dtey3ye4yeuuedet'
            const req = {
                params:{
                    id:ID
                }
            }

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }

            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    rowsAffected: [0]
                })
            })

            await deleteStudent(req, res)


            expect(res.json).toHaveBeenCalledWith({
                message: 'student not found'
            })
        })

    })

})