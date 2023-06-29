import styled from "styled-components";
import { mobileMax } from "../../../../../theme";

export const Button = styled.button`
  max-height: 40px;
  max-width: 100%;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  padding: 2px;
  background: rgb(51, 68, 51);
  color: white;

  @media (max-width: ${mobileMax}px) {
    width: 75%;
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
