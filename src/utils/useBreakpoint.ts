import { createTheme, useMediaQuery } from "@mui/material";

export const useBreakpoint = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1224,
      },
    },
  });

  const xs: boolean = useMediaQuery(theme.breakpoints.only("xs"));
  const sm: boolean = useMediaQuery(theme.breakpoints.only("sm"));
  const md: boolean = useMediaQuery(theme.breakpoints.only("md"));
  const lg: boolean = useMediaQuery(theme.breakpoints.only("lg"));
  const xl: boolean = useMediaQuery(theme.breakpoints.only("xl"));

  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return { xs, sm, md, lg, xl, mobileScreen, tabletScreen, desktopScreen };
};
