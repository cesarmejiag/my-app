import Link from "next/link";
import styles from "../styles/navigation.module.css";

export default function Navigation({ options = [] }) {
  return (
    <nav className={styles.nav}>
      {options.map((option, index) => (
        <Link
          key={`navigation-${index}`}
          href={{
            pathname: "/landing",
            query: { slug: option.href, title: option.text },
          }}
          as={option.href}
          passHref
          legacyBehavior
        >
          <a className={styles.link}>{option.text}</a>
        </Link>
      ))}
    </nav>
  );
}
