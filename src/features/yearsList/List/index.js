import { DataBox, ItemBox } from "../../../common/Result";
import { Wrapper } from "./styled";

export const List = () => {
  return (
    <Wrapper>
      <DataBox layoutBox>
        <ItemBox layout>coś</ItemBox>
        <ItemBox>coś2</ItemBox>
      </DataBox>
    </Wrapper>
  );
};
