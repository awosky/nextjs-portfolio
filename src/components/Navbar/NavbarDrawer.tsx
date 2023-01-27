import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "src/components/Navbar/NavbarDrawer.module.scss";
import NavbarLink from "src/components/Navbar/NavbarLink";
import { navigationList } from "src/constants/content";
import { HOME } from "src/constants/global";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <IconButton aria-label="menu" onClick={onToggle}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        className={styles.drawer}
        anchor="left"
        open={isOpen}
        onClose={onToggle}
        onOpen={onToggle}
      >
        <Box className={styles.box}>
          <Grid container className={styles.grid}>
            <Grid item>
              <NavbarLink name={HOME}>
                <Image
                  className={styles.logo}
                  src="/images/logo.webp"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </NavbarLink>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="h1">
                Faisal Nur Hakim
              </Typography>
              <Typography variant="caption" component="h2">
                Software Engineer
              </Typography>
            </Grid>
          </Grid>

          <Stack direction="column" spacing={3} className={styles.stack}>
            {navigationList.map(({ name }) => {
              return (
                <NavbarLink key={name} name={name} onClicked={onToggle}>
                  <Grid container justifyContent="space-between">
                    <Grid item>{name}</Grid>
                    <Grid item className={styles.icon}>
                      <ChevronRightIcon />
                    </Grid>
                  </Grid>
                </NavbarLink>
              );
            })}
          </Stack>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default NavbarDrawer;
