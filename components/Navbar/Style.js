import { Blue } from "@/styles/Color";
import { Title } from "@/styles/Title";
import Link from "next/link";
import styled from "styled-components";

export const NavbarStyled = styled.div`
  background-color: ${Blue};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

export const NavLink = styled(Link)`
  color: black; 
  text-decoration: none; 
  font-size: 18px;
  margin: 0 20px; 
  
  &:hover {
    color: gray; 
  }

  &:active {
    color: black; 
  }
`;