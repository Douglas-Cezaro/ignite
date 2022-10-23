import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import Home, { getStaticProps } from "../../pages";
import { stripe } from "../../services/stripe";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return {
        data: null,
      };
    },
  };
});

jest.mock("../../services/stripe");

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "fake-price-id",
          amount: "$9.99",
        }}
      />
    );

    expect(screen.getByText(new RegExp("\\$9.99", "i"))).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const retriveStripePricesMocked = mocked(stripe.prices.retrieve);

    retriveStripePricesMocked.mockResolvedValueOnce({
      id: "fake-price-id",
      unit_amount: 999,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      // Verifica se o objeto contém
      expect.objectContaining({
        props: { product: { priceId: "fake-price-id", amount: "$9.99" } },
      })
    );
  });
});

