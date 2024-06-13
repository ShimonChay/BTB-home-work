import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Authorizer } from "../../logic/details-interfaces/authorizer";
import { Authenticator } from "../../logic/details-interfaces/authenticator";
import { basicAuth } from "./basicAuth";
import { config } from "../../config";
import { login } from "./login";
import { logout } from "./logout";

export const initExpress = (
  authenticator: Authenticator,
  authorizer: Authorizer
) => {
  const app: Express = express();
  const port = config.PORT;

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({ origin: config.CLIENT_URL, credentials: true }));


  app.post("/login", login(authenticator));
  app.post("/logout", logout());

  app.use("/", basicAuth);

  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.user;
    req.user.isAdmin = authorizer.isUserAdmin(username);
    next();
  });

  app.get("/me", (req: Request, res: Response) => {
    res.status(200).json(req.user);
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};
