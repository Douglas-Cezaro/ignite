import { useSession, signIn } from "next-auth/react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

// 3 Lugares para usar as credenciais secretas
// getServerSideProps (SSR)
// getStaticProps (SSG)
// API Routes

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}

