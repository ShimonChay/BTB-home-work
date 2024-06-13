export interface Authorizer {
  isUserAdmin: (username: string) => boolean;
}
