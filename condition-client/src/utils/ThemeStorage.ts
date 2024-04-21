import { Theme } from "../context/ThemeContext";

export const ThemeStorageKey = "features-color-theme";

class ThemeStorage {
  public getTheme = (): Theme => {
    let theme = localStorage.getItem(ThemeStorageKey);

    if (!theme) {
      localStorage.setItem(ThemeStorageKey, "light");
      theme = "light";
    }

    return theme as Theme;
  };

  public setTheme = (theme: Theme): void => {
    localStorage.setItem(ThemeStorageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
}

export const themeStorage = new ThemeStorage();
