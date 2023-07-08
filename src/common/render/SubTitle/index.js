import styled from "styled-components";
import { tabletMax } from "../../../theme";

export const SubTitle = styled.h3`
  color: rgb(203, 175, 68);
  margin: 10px 0 30px;
  text-align: center;
  font-size: 30px;

  @media (max-width: ${tabletMax}px) {
    font-size: 26px;
    margin: 10px 0px 24px;
  }
`;
