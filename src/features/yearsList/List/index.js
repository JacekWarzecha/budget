import { DataBox, ItemBox } from "../../../common/Result";
import { Wrapper } from "./styled";
import { selectYearsList } from "../../Logic/yearsList/yearsListSlice";
import { useSelector } from "react-redux";

export const List = () => {
  const yearsList = useSelector(selectYearsList);
  console.log(yearsList);

  return (
    <Wrapper>
      <DataBox layoutBox>
        <ItemBox layout>coś</ItemBox>
        <ItemBox>coś2</ItemBox>
      </DataBox>
    </Wrapper>
  );
};
