import styled from "styled-components";
import { mobileMax } from "../../../../../theme";

export const Input = styled.input`
  max-width: 100%;
  max-height: 40px;
  font-size: 16px;
  padding: 6px;
  border-radius: 4px;
  border: none;
  text-align: center;
  color: white;
  background: rgb(51, 68, 51);
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
  :-moz-placeholder {
    color: white;
  }

  &:hover {
    filter: brightness(115%);
  }

  @media (max-width: ${mobileMax}px) {
    width: 75%;
  }
`;
