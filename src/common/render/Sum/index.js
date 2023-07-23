import styled from "styled-components";

export const Sum = styled.span`
  color: ${({ theme }) => theme.colors.value};
  font-weight: normal;

  &:hover {
    filter: brightness(145%);
  }
`;
