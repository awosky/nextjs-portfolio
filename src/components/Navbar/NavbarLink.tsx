import { Link } from "@mui/material";
import { ReactNode, useCallback, useContext } from "react";
import styles from "src/components/Navbar//NavbarLink.module.scss";
import { CONTACT, HOME, PORTFOLIO, SKILLS } from "src/constants/global";
import { NavigationContext } from "src/store/providers/NavigationProvider";

interface Props {
  name: string;
  children?: ReactNode | string;
  onClicked?: () => void;
}

const NavbarLink = (props: Props) => {
  const { name, children, onClicked } = props;
  const navigations = useContext(NavigationContext);

  const getActiveRef = useCallback(() => {
    switch (name) {
      case HOME:
        return navigations.homeSection;
      case SKILLS:
        return navigations.skillSection;
      case PORTFOLIO:
        return navigations.portoSection;
      case CONTACT:
        return navigations.contactSection;
      default:
        return navigations.homeSection;
    }
  }, [name, navigations]);

  const scroolTo = useCallback(() => {
    getActiveRef()?.current?.scrollIntoView({ behavior: "smooth" });

    let scrollTimeout: NodeJS.Timeout;
    const onScrolled = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => onClicked?.(), 100);
    };

    window.addEventListener("scroll", onScrolled);
    return () => window.removeEventListener("scroll", onScrolled);
  }, [getActiveRef, onClicked]);

  return (
    <Link
      className={styles.navlink}
      component="button"
      variant="subtitle1"
      onClick={scroolTo}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
