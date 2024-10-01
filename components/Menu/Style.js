import styled from "styled-components";
import { Blue } from "@/styles/Color";

export const MenuStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  overflow-y: auto;
  padding: 20px 40px;
  flex-grow: 1;
  max-height: 100%;
`;

export const MenuWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

export const MenuItem = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }
`;

export const ToppingItem = styled(MenuItem)`
  padding-left: 20px;
  background-color: ${(props) => (props.isActive ? `${Blue}` : '#f9f9f9')};
`;

export const ToppingImage = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
  border-radius: 4px;
`;

export const ToppingName = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
  padding-left: 10px;
`;

export const ToppingList = styled.div`
  margin-top: 5px;
`;

export const ArrowIcon = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

export const MenuTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 0;
`;