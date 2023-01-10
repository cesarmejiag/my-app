import { useState, useEffect } from "react";
import styles from "./clock.module.css";

export default function Clock() {
  const [current, setCurrent] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setCurrent(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div className={styles.clock}>{current.toLocaleTimeString()}</div>;
}
