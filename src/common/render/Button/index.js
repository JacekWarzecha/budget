import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../theme";

export const Button = styled.button`
  max-height: 40px;
  width: 100%;
  font-size: 22px;
  border-radius: 4px;
  border: none;
  padding: 30px;
  background: rgb(51, 68, 51);
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
    padding: 20px;
  }

  @media (max-width: ${mobileMax}px) {
  }

  @media (max-width: ${smallMobileMax}px) {
  }

  &&:hover {
    cursor: pointer;
    filter: brightness(115%);
  }
`;

export const ButtonDelete = styled.button`
  background: none;
  border: none;

  &&:hover {
    cursor: pointer;
    filter: brightness(135%);
  }

  &&:active {
    filter: brightness(155%);
  }
`;
