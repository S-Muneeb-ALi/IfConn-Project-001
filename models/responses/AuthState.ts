import { LoginUserResponse } from "./LoginUserResponse";

export default interface AuthenticationResponse {
  isAuthenticated: boolean;
  user?: LoginUserResponse;
}
