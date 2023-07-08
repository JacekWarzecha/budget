import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../theme";

export const Input = styled.input`
  width: 100%;
  max-height: 40px;
  font-size: 22px;
  padding: 30px;
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

  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
    padding: 20px;
  }

  @media (max-width: ${mobileMax}px) {
  }

  @media (max-width: ${smallMobileMax}px) {
    font-size: 12px;
  }
`;
