import { mockAuthenticator } from "./details/authentication/mockAuthenticator";
import { mockAuthorizer } from "./details/authorization/mockAuthorizer";
import { initExpress } from "./details/express/initExpress";

initExpress(mockAuthenticator(), mockAuthorizer());
