import * as prismic from "@prismicio/client";
export function getPrismicClient() {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_REPOSITORY_NAME);

  const prismicConfig = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismicConfig;
}

