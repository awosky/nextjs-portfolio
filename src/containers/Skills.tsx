import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { skillList } from "src/constants/content";
import styles from "src/containers/Skills.module.scss";
import { ISkill } from "src/interfaces/global";
import { useBreakpoint } from "src/utils/useBreakpoint";

const Skills = () => {
  const { desktopScreen } = useBreakpoint();

  return (
    <Box className={styles.skills}>
      <Container>
        <Typography variant="h4" component="h1" className={styles.title}>
          Skills
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 5, md: 10, lg: 15 }}
          columnSpacing={{ xs: 5, md: 5, lg: 10 }}
        >
          {skillList.map((item: ISkill) => {
            return (
              <Grid key={item.name} item xs={6} sm={4} md={3}>
                <Box className={styles.box}>
                  <Box className={styles.card}>
                    <Box className={styles.front}>
                      <Image
                        src={item.src}
                        width={desktopScreen ? 100 : 60}
                        height={desktopScreen ? 100 : 60}
                        alt={item.name}
                      />
                    </Box>
                    <Box className={styles.back}>
                      <Typography variant="h6" component="h2">
                        {item.name}
                        <br />
                        {item.level}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
