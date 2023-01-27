import { ITheme } from "src/interfaces/global";
import themeColor from "src/styles/_theme.module.scss";

export const changeTheme = (root: HTMLElement, theme: ITheme) => {
  const isDarkTheme = theme === "dark";
  const bgColorTransparant = isDarkTheme
    ? themeColor.colorDarkTransparant
    : themeColor.colorLightTransparant;
  const backgroundColor = isDarkTheme
    ? themeColor.colorDark
    : themeColor.colorLight;
  const gradientColor = isDarkTheme
    ? themeColor.colorBlueDark
    : themeColor.colorBlueLight;
  const fontColor = isDarkTheme ? themeColor.colorLight : themeColor.colorDark;
  const cardColor = isDarkTheme
    ? themeColor.colorBlueDark
    : themeColor.colorLight;

  root.style.setProperty("--background-color-transparant", bgColorTransparant);
  root.style.setProperty("--background-color", backgroundColor);
  root.style.setProperty("--gradient-color", gradientColor);
  root.style.setProperty("--font-color", fontColor);
  root.style.setProperty("--card-color", cardColor);
};
