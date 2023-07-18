import { DataBox, ItemBox, Value } from "../../../common/Result";
import { Wrapper } from "./styled";
import { selectYearsList } from "../../Logic/yearsList/yearsListSlice";
import { useSelector } from "react-redux";

export const List = () => {
  const yearsList = useSelector(selectYearsList);
  console.log(yearsList);

  return (
    <Wrapper>
      {yearsList.length >= 1 &&
        yearsList?.map((e) => (
          <DataBox layoutBox key={e.id}>
            <ItemBox>{new Date(e.dateYear).getFullYear()}</ItemBox>
            <ItemBox layout>
              Przychody: <Value>{e.incomesYear}</Value>
            </ItemBox>
            <ItemBox>
              Koszty: <Value>{e.costsYear}</Value>
            </ItemBox>
            <ItemBox>
              Bilans: <Value>{e.resultYear}</Value>
            </ItemBox>
          </DataBox>
        ))}
    </Wrapper>
  );
};
