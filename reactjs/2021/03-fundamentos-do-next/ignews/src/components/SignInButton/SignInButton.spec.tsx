import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/react";
import { SignInButton } from ".";

jest.mock("next-auth/react");

// Categorizar os testes
describe("SignInButton component", () => {
  it("renders correctly when users is not authenticated", () => {
    const useSessionMocked = mocked(useSession);

    // Só vai mockar o primeiro retorno
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when users is authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "John Doe",
          email: "john@email.com",
        },
        expires: "fake-expires",
        activeSubscription: {
          ref: {
            "@ref": {
              id: "345083198127997520",
              collection: {
                "@ref": {
                  id: "subscriptions",
                  collection: {
                    "@ref": {
                      id: "collections",
                    },
                  },
                },
              },
            },
          },
          ts: 1665811925110000,
          data: {
            id: "sub_1Lr8KHCqXaBE3cpEl3funUkB",
            userId: {
              "@ref": {
                id: "345066162757829199",
                collection: {
                  "@ref": {
                    id: "users",
                    collection: {
                      "@ref": {
                        id: "collections",
                      },
                    },
                  },
                },
              },
            },
            status: "active",
            price_id: "price_1LqoemCqXaBE3cpEP46APorX",
          },
        },
      },
      status: "authenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});

