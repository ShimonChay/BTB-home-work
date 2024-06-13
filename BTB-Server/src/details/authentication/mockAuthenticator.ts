import { Authenticator } from "../../logic/details-interfaces/authenticator";

const users = [
  { id: '1', username: "shimon", password: "shimon123" },
  { id: '2', username: "chay", password: "chay123" },
  { id: '3', username: "admin", password: "admin123" },
  { id: '4', username: "nonadmin", password: "nonadmin" },
];

export const mockAuthenticator = (): Authenticator => ({
  authenticateUser: (username, password) => users.find(user => user.username === username && user.password === password),
});
