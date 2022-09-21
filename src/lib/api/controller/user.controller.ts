import { Request, Response } from "express"


const entity = "User"

export const list =async (req:Request, res:Response) => {
    try {
       res.send("Happy")
    } catch (error) {
        return error
    }
}