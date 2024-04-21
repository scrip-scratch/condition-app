import { createContext } from "react";
import { LoginRequest } from "../api/AuthApi";

export enum Role {
  Master = "Master",
  Admin = "Administrator",
  User = "User",
}

type AuthContextType = {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
  login: (params: LoginRequest) => Promise<any>;
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setAuth: () => {},
  login: () => Promise.resolve(),
});
