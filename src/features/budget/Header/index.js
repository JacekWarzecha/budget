import { HeaderPage, Wrapper, DataBox, ItemBox, Value, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIncomesSum, selectIncomes } from "../incomesSlice";
import { selectCostsSum } from "../costsSlice";
import { selectResultState } from "../resultSlice";
import { addDataBase } from "../dataBaseSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const { incomes } = useSelector(selectIncomes);
  const costsSum = useSelector(selectCostsSum);
  const { result } = useSelector(selectResultState);
  const dispatch = useDispatch();
  console.log(incomes);

  return (
    <Wrapper>
      <HeaderPage>Poznaj swój budżet</HeaderPage>
      <DataBox>
        {incomes.length >= 1 ? <ItemBox>{incomes[0].date}</ItemBox> : ""}
        <ItemBox>
          Przychody:&nbsp;<Value>{incomesSum}</Value>
        </ItemBox>
        <ItemBox>
          Koszty:&nbsp;<Value>{costsSum}</Value>
        </ItemBox>
        <ItemBox>
          Bilans:&nbsp;<Value>{result}</Value>
        </ItemBox>
        <ItemBox>
          <Button
            onClick={() =>
              dispatch(
                addDataBase({
                  incomesSum: incomesSum,
                  costsSum: costsSum,
                  result: result,
                  date: incomes[0].date,
                  id: nanoid(),
                })
              )
            }
            title="Na koniec miesiąca dodaj bilans do tablicy"
          >
            ➕
          </Button>
        </ItemBox>
      </DataBox>
    </Wrapper>
  );
};
