import { Box, Container, Grid, Stack, Switch } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "src/components/Navbar/index.module.scss";
import NavbarDrawer from "src/components/Navbar/NavbarDrawer";
import NavbarLink from "src/components/Navbar/NavbarLink";
import { navigationList } from "src/constants/content";
import { HOME } from "src/constants/global";
import { ThemeContext } from "src/store/providers/ThemeProvider";
import { useBreakpoint } from "src/utils/useBreakpoint";

const Navbar = () => {
  const { desktopScreen } = useBreakpoint();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, [setTheme]);

  const changeTheme = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.checked;
      setTheme(value ? "dark" : "light");
    },
    [setTheme]
  );

  return (
    <Box
      className={classNames(styles.navbar, { [styles.scrolled]: isScrolled })}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2} className={styles.grid}>
            {desktopScreen ? (
              <NavbarLink name={HOME}>
                <Image
                  className={styles.logo}
                  src="/images/logo.webp"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </NavbarLink>
            ) : (
              <NavbarDrawer />
            )}
          </Grid>

          {desktopScreen && (
            <Grid item sm={2} className={styles.grid}>
              <Stack direction="row" spacing={8}>
                {navigationList.map(({ name }) => {
                  return (
                    <NavbarLink key={name} name={name}>
                      {name}
                    </NavbarLink>
                  );
                })}
              </Stack>
            </Grid>
          )}

          <Grid item xs={4} sm={2} className={styles.grid}>
            🌞
            <Switch
              color="default"
              onChange={changeTheme}
              checked={theme === "dark"}
            />
            🌚
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
