import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width="100%"
          height="100%"
        />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          {/* prefetch para pre-carregar a pagina*/}
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}

