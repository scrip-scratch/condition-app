import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { LoginRequest, authApi } from "../api/AuthApi";
import { authStorage } from "../utils/authStorage";

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isAuth, setAuth] = useState<boolean>(false);

  const checkToken = async () => {
    const token = authStorage.getToken();
    if (token === null) return;
    const response = await authApi.checkAuthAsync(token);
    if (response) {
      console.log(response); // TODO:DELETE DEV LOG
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, [isAuth]);

  const login = async (request: LoginRequest): Promise<any> => {
    const response = await authApi.loginAsync(request);

    if (response) {
      const status: number = response.status;

      if (status !== 200) {
        return;
      }
      if (!response.data) {
        return;
      }

      authStorage.setToken(response.data.auth_token);
      setAuth(true);

      // navigate(from.toLowerCase().startsWith("/logout") ? "/" : from, {
      //   replace: false,
      // });
      return response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
