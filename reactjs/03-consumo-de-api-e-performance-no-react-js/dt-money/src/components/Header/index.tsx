import { HeaderContainer, HeaderContent, NewTransitionButton } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransitionButton>Nova transação</NewTransitionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
