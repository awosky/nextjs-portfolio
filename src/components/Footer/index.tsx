import { Box, Container, Typography } from "@mui/material";
import styles from "src/components/Footer/index.module.scss";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container>
        <Typography variant="subtitle1" component="h2" className={styles.text}>
          That’s all for now. Come back anytime — I’ll probably still be coding
          😉
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
