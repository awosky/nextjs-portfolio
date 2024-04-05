import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "src/components/Loader/index.module.scss";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 1500);
  }, []);

  return (
    <div className={classNames(styles.loader, { [styles.fade]: !showLoader })}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default Loader;
