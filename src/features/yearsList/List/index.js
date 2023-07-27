import { DataBox, ItemBox, Value } from "../../../common/Result";
import { Wrapper } from "./styled";
import {
  selectYearsList,
  deleteYearsList,
} from "../../Logic/yearsList/yearsListSlice";
import { useSelector, useDispatch } from "react-redux";
import { ButtonDelete } from "../../../common/render/Button";

export const List = () => {
  const yearsList = useSelector(selectYearsList);
  const dispatch = useDispatch();
  // console.log(yearsList);

  return (
    <Wrapper>
      {yearsList.length >= 1 &&
        yearsList?.map((e) => (
          <DataBox layoutBox marginTop key={e.id}>
            <ItemBox>{new Date(e.dateYear).getFullYear()}</ItemBox>
            <ItemBox layout>
              Przychody:&nbsp;<Value>{e.incomesYear}</Value>
            </ItemBox>
            <ItemBox>
              Koszty:&nbsp;<Value>{e.costsYear}</Value>
            </ItemBox>
            <ItemBox>
              Bilans:&nbsp;<Value>{e.resultYear}</Value>
            </ItemBox>
            <ButtonDelete onClick={() => dispatch(deleteYearsList(e.id))}>
              ➖
            </ButtonDelete>
          </DataBox>
        ))}
    </Wrapper>
  );
};
