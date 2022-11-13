import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { shimmer, toBase64 } from "../../components/Shimmer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../styles/pages/product";

import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    description: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { isFallback } = useRouter();

  if (isFallback) {
    let loadingImage = atob(toBase64(shimmer(550, 480)));

    return (
      <ProductContainer>
        <ImageContainer
          dangerouslySetInnerHTML={{
            __html: loadingImage,
          }}
        />
        <ProductDetails>
          <SkeletonTheme baseColor="#202024" highlightColor="#121214">
            <Skeleton />
            <Skeleton height={50} />
            <Skeleton height={400} />
            <Skeleton height={50} />
          </SkeletonTheme>
        </ProductDetails>
      </ProductContainer>
    );
  }

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          placeholder="blur"
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(520, 480)
          )}`}
        />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyButton}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / mais acessados
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  {
    id: string;
  }
> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

