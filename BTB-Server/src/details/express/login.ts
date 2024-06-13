import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../config";
import { Authenticator } from "../../logic/details-interfaces/authenticator";

export const TOKEN_NAME = "token";

export const login = (authenticator: Authenticator) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const { username, password } = user;
    const registeredUser = authenticator.authenticateUser(username, password);

    if (!registeredUser) {
      return res.status(404).json({ message: 'Incorrect username or password' });
    }

    const token = jwt.sign({ id: registeredUser.id, username: registeredUser.username }, config.SECRET_ACCESS_TOKEN, { expiresIn: "30m", });
    res.cookie(TOKEN_NAME, token, {
      httpOnly: true
    });
    res.status(200).json({ message: 'Login success' });

  } catch (error: any) {
    res.status(400).json({ message: error.message.toString() });
  }
}