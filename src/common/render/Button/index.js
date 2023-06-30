import styled from "styled-components";
import { mobileMax } from "../../../theme";
import { smallMobileMax } from "../../../theme";

export const Button = styled.button`
  max-height: 40px;
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  padding: 2px;
  background: rgb(51, 68, 51);
  color: white;

  @media (max-width: ${mobileMax}px) {
  }

  @media (max-width: ${smallMobileMax}px) {
    font-size: 12px;
    padding: 6px;
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
