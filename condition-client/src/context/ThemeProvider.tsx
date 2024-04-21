import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import { themeStorage } from "../utils/ThemeStorage";

export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themeStorage.getTheme());

  useEffect(() => {
    setTheme(themeStorage.getTheme());
    document.documentElement.setAttribute(
      "data-theme",
      themeStorage.getTheme()
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
