import Navigation from "./navigation";
import styles from "./layout.module.css";
import { Fragment } from "react";

export default function Layout({ config, children }) {
  return (
    <Fragment>
      <Navigation options={config.navOptions} />
      <div className={styles.holder}>{children}</div>
    </Fragment>
  );
}
