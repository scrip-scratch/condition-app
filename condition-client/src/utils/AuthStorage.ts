export const AuthStorageKey = "features-auth";

class AuthStorage {
  public getToken = (): string | null => {
    let token: string | null = localStorage.getItem(AuthStorageKey);
    return token;
  };

  public setToken = (token: string) => {
    localStorage.setItem(AuthStorageKey, token);
  };
}

export const authStorage = new AuthStorage();
