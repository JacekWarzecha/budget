import styled from "styled-components";

export const Button = styled.button`
  max-height: 40px;
  max-width: 100%;
  font-size: 20px;

  &&:hover {
    cursor: pointer;
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
