import { Logo, NavbarStyled, NavLink } from "./Style";

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        <NavLink href="/">GAME</NavLink>
        <NavLink href="/games/new">ADD GAME</NavLink>
      </Logo>
    </NavbarStyled>
  );
}