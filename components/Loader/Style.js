import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;