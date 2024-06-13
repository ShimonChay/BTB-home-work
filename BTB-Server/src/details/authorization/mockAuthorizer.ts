import { Authorizer } from "../../logic/details-interfaces/authorizer";

const adminUsers = ["chay", "admin"];

export const mockAuthorizer = (): Authorizer => ({
  isUserAdmin: (username) => adminUsers.includes(username),
});
