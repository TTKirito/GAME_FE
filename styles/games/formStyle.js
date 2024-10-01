import styled from 'styled-components';
import { Blue } from "@/styles/Color";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh; 
  flex-direction: column;
  margin-right: 350px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  padding-bottom: 40px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
`;

export const FormDetail = styled.input`
  height: 40px;
  padding: 10px;
  font-size: 18px;
  background-color: #f0f0f0;
  border-radius: 7px;
  margin-top: 5px;
  width: 100%;
  box-shadow: 0 0 2px grey;
  border: none;
  transition: box-shadow 0.1s, margin-top 0.1s;

  &:hover {
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 5px;
    box-shadow: 0 5px 10px grey;
    background-color: ${Blue};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${Blue};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const SubmitButton = styled.button`
  height: 50px;
  font-size: 20px;
  background-color: ${Blue};
  color: white;
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  &:hover {
    background-color: darken(${Blue}, 10%);
    box-shadow: 0 5px 10px grey;
  }

  &:active {
    background-color: darken(${Blue}, 20%);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    height: 45px;
  }
`;