import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext } from "react";
import Footer from "src/components/Footer";
import { contactList } from "src/constants/content";
import styles from "src/containers/Contact.module.scss";
import { IContact } from "src/interfaces/global";
import { NavigationContext } from "src/store/providers/NavigationProvider";
import { useBreakpoint } from "src/utils/useBreakpoint";

const Contact = () => {
  const { desktopScreen } = useBreakpoint();
  const { homeSection } = useContext(NavigationContext);

  contactList.sort((a: IContact, b: IContact) => {
    const sortedListOnDesktop = a.position.desktop - b.position.desktop;
    const sortedListOnMobile = a.position.mobile - b.position.mobile;
    return desktopScreen ? sortedListOnDesktop : sortedListOnMobile;
  });

  const scrollToHome = useCallback(() => {
    homeSection?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [homeSection]);

  return (
    <Box className={styles.contact}>
      <Container>
        <Typography variant="h4" component="h1" className={styles.title}>
          Contact
        </Typography>
        <Grid
          className={styles.container}
          container
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={4}
        >
          {contactList.map((item: IContact) => {
            if (!item.isSocmed) {
              return (
                <Grid key={item.name} item xs={12} sm={2}>
                  <Box className={styles.box} onClick={scrollToHome}>
                    <Image
                      className={styles.logo}
                      src={item.src}
                      width={80}
                      height={80}
                      alt={item.name}
                    />
                  </Box>
                </Grid>
              );
            }

            return (
              <Grid key={item.name} item xs={6} sm={2}>
                <Link
                  href={item.link}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Box className={styles.box}>
                    <Image
                      className={styles.socmed}
                      src={item.src}
                      width={40}
                      height={40}
                      alt={item.name}
                    />
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      className={styles.text}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;
