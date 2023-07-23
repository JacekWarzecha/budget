import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../core/App/theme";

export const Input = styled.input`
  width: 100%;
  max-height: 40px;
  font-size: 22px;
  padding: 30px;
  border-radius: 4px;
  border: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.site.text};
  font-style: italic;
  background: ${({ theme }) => theme.colors.smallBox.background};
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.site.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.site.text};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.colors.site.text};
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
  }
`;
