import styled from "styled-components";
import { mobileMax } from "../../../../../theme";

export const Button = styled.button`
  max-height: 40px;
  max-width: 100%;
  font-size: 20px;

  &&:hover {
    cursor: pointer;
  }

  @media (max-width: ${mobileMax}) {
    align-self: flex-end;
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
