import { Dispatch, SetStateAction, createContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  setTheme: () => {},
});
