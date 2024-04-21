import axios from "axios";

export interface LoginRequest {
  email: string;
  password: string;
}

class AuthApi {
  public async loginAsync(request: LoginRequest) {
    // const endpoint = import.meta.env.VITE_SERVER_URL + "/login";

    try {
      // const response = await axios.post(endpoint, {
      //   email: request.email,
      //   password: request.password,
      // });
      // return response;
      if (request.email === "admin" && request.password === "1234") {
        return {
          status: 200,
          success: true,
          data: {
            auth_token: "1234",
          },
        };
      } else {
        return {
          status: 401,
          success: false,
        };
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async checkAuthAsync(token: string) {
    const endpoint = import.meta.env.VITE_SERVER_URL + "/check-token";

    try {
      const response = await axios.post(endpoint, {
        token: token,
      });
      return response;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export const authApi = new AuthApi();
