import styled from "styled-components";
import { Blue } from "@/styles/Color";

export const BannerWrapper = styled.div`
  padding-top: 40px;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const Banner = styled.div`
  display: flex;
  height: 100%;
  transition: ${({ $isDragging }) => ($isDragging ? "none" : "0.3s ease-in-out")};
  transform: ${({ $offsetX, $currentSlide }) =>
    `translateX(${$offsetX - $currentSlide * 100}%)`};
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  position: relative;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-size: cover;
  filter: blur(10px);
  transition: opacity 0.3s ease;
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 30px;
  left: 39%;
  transform: translateX(-50%);
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? Blue : "black")};
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${Blue};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CenterImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 39%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  z-index: 2;
  border-radius: 20px;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledButton = styled.button`
  width: 30%;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #183089;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledTextContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;
