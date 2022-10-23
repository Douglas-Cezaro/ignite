import { render, screen } from "@testing-library/react";
import Home from "../../pages";

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
});

