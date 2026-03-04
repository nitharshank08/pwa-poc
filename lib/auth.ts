export const AUTH_COOKIE_NAME = "demo_auth";

export function isValidDummyUser(username: string, password: string) {
  // Dummy credentials
  return username === "admin" && password === "admin123";
}