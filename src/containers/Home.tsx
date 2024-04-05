import { Box, Container, Typography } from "@mui/material";
import classNames from "classnames";
import { useCallback, useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "src/components/Navbar";
import styles from "src/containers/Home.module.scss";
import { NavigationContext } from "src/store/providers/NavigationProvider";

const Home = () => {
  const navigations = useContext(NavigationContext);
  const [showCursor, setShowCursor] = useState(true);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTypewriter(true), 1500);
    setTimeout(() => setShowCursor(false), 9000);
  }, []);

  const scroolToSkills = useCallback(() => {
    navigations.skillSection?.current?.scrollIntoView({ behavior: "smooth" });
  }, [navigations.skillSection]);

  return (
    <Box className={classNames(styles.home)}>
      <Navbar />
      <Container className={styles.hero}>
        <Box className={styles.box}>
          <Typography variant="h2" component="h1" className={styles.text}>
            Hello
            <br />
            {"I'm "}
            {showTypewriter && (
              <Typewriter
                words={[
                  "Faisal Nur Hakim",
                  "Indonesian",
                  "a Software Engineer.",
                ]}
                cursor={showCursor}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            )}
          </Typography>
        </Box>
        <Box className={styles.scroller}>
          <Box className={styles.mouse} onClick={scroolToSkills}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
