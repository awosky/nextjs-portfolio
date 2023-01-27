import { createContext, useEffect, useMemo, useState } from "react";
import { ITheme, IThemeContext } from "src/interfaces/global";
import { changeTheme } from "src/utils/theme";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => null,
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<ITheme>("light");
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    changeTheme(document.documentElement, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
