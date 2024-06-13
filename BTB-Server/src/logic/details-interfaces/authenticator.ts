import { User } from "../../entities/user";

export interface Authenticator {
  authenticateUser: (username: string, password: string) => User | undefined;
}
