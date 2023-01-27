import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { portfolioList } from "src/constants/content";
import styles from "src/containers/Portfolio.module.scss";
import { IPortfolio } from "src/interfaces/global";
import { useBreakpoint } from "src/utils/useBreakpoint";

const Portfolio = () => {
  const { desktopScreen } = useBreakpoint();

  portfolioList.sort((a: IPortfolio, b: IPortfolio) => {
    const sortedListOnDesktop = a.position.desktop - b.position.desktop;
    const sortedListOnMobile = a.position.mobile - b.position.mobile;
    return desktopScreen ? sortedListOnDesktop : sortedListOnMobile;
  });

  return (
    <Box className={styles.portfolio}>
      <Container>
        <Typography variant="h4" component="h1" className={styles.title}>
          Portfolio
        </Typography>
        <ImageList variant="masonry" cols={desktopScreen ? 3 : 2} gap={20}>
          {portfolioList.map((item: IPortfolio) => (
            <ImageListItem key={item.src}>
              <Box className={styles.wrapper}>
                <Image alt={item.src} src={item.src} width={400} height={400} />
                <Box className={styles.middle}>
                  <Link href={item.link} target="_blank">
                    <Box className={styles.icon}>
                      <LaunchIcon fontSize="small" />
                    </Box>
                  </Link>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Portfolio;
