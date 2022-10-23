import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "../styles/home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

// Vai ser executado toda a vez que o usuário acessar a tela
// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve("price_1LqoemCqXaBE3cpEP46APorX");

//   const product = {
//     priceId: price.id,
//     //DICA PARA ARMAZENAR PRECO NO BANCO, ARMAZENAR EM CENTAVOS PARA SEMPRE SER UM NUMERO INTEIRO
//     amount: new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price.unit_amount / 100),
//   };
//   return {
//     props: { product },
//   };
// };

// Vai ser executado toda a vez que o usuário acessar a tela, porém só vai executar seu conteúdo depois do tempo
// de revalidate, ele vai salvar um html estatico e vai mostrar pra todos
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1LqoemCqXaBE3cpEP46APorX");

  const product = {
    priceId: price.id,
    //DICA PARA ARMAZENAR PRECO NO BANCO, ARMAZENAR EM CENTAVOS PARA SEMPRE SER UM NUMERO INTEIRO
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

