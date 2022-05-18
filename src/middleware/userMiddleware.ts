import { any } from 'joi';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export default class middleware {
      async auth(req:any, res:any, next:NextFunction) {
    try {
        const tokenString:any = req.headers.authorization
        
        let token = tokenString.replace('Bearer ', "") 
        // console.log(token)
        let secretkey :any= process.env.SECRET_KEY
        
        const verifyUser: any = jwt.verify(token,secretkey)
        if(!verifyUser){
            req.userId = verifyUser._id
            return res.status(401).send({msg:"User Unauthorized"})
        
        }
        next();
    } catch (e) {
           
            res.status(401).send({msg: "User Unauthorized" })
    }
}
}

