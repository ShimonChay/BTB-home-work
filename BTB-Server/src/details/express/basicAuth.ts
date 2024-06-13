import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { config } from "../../config";
import { TOKEN_NAME } from "./login";

export const basicAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = req.cookies[TOKEN_NAME];
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized. Please login" });
    }

    jwt.verify(token, config.SECRET_ACCESS_TOKEN, async (err, decoded) => {
      if (err) {
        res.clearCookie(TOKEN_NAME);
        return res.status(401).json({ message: "The token is invalid or expired. Please login" });
      }

      req.user = decoded;
      next();
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
