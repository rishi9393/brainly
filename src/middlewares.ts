import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    const header= req.headers['authorization'];
    const decodedToken = jwt.verify(header as string, JWT_PASSWORD) 

    if(decodedToken){
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({message: "you are not authorized"});
    }
};
