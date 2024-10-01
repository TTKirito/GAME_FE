import { Blue } from "@/styles/Color";
import { Title } from "@/styles/Title";
import styled from "styled-components";

export const DialogWrapper = styled.div`
  margin: 20px 400px 50px 20px;
`;

export const DialogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-bottom: 40px;
`;

export const DialogLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const DialogDetail = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-repeat: no-repeat;
  filter: contrast(75%);
  border-radius: 7px;
  margin-top: 5px;
  transition: box-shadow 0.1s, margin-top 0.1s;
  box-shadow: 0 0 2px grey;

  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0;
    margin-bottom: 5px;
    box-shadow: 0 5px 10px grey;
    background-color: ${Blue};
  }
`;