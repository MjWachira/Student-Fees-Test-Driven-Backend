import { request } from "supertest";
import mssql from "mssql"
import { AddStudents, AllStudents } from "../Controllers/studentController";

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



})