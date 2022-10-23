import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return {
        data: null,
      };
    },
  };
});

// Categorizar os testes
describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);

    // Abrir URL de tests, usado para mapear os elementos de forma mais fácil, aqui voce vai
    // pode ver como encontrar um elemento em tela
    screen.logTestingPlaygroundURL();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});

