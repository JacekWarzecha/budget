import styled from "styled-components";

export const Wrapper = styled.div``;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.site.text};

  &:hover {
    filter: brightness(150%);
  }
`;
