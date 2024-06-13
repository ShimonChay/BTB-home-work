import { Request, Response } from "express";
import { TOKEN_NAME } from "./login";

export const logout = () => (req: Request, res: Response) => {
  res.clearCookie(TOKEN_NAME, {
    httpOnly: true,
  });
  res.status(200).json({ message: 'Logout success' });
}