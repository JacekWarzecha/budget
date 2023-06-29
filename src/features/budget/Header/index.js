import { HeaderPage, Wrapper, DataBox, ItemBox, Value } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIncomesSum, selectIncomes } from "../incomesSlice";
import { selectCostsSum } from "../costsSlice";
import { selectResultState } from "../resultSlice";
import { Button } from "../UserData/common styled/Button";
import { addDataBase } from "../dataBaseSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const { incomes } = useSelector(selectIncomes);
  const costsSum = useSelector(selectCostsSum);
  const { result } = useSelector(selectResultState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <HeaderPage>Poznaj swój budżet</HeaderPage>
      <DataBox>
        {incomes.length >= 1 ? (
          <ItemBox date>{incomes[0].date.slice(3)}</ItemBox>
        ) : (
          ""
        )}
        <ItemBox>
          Przychody: <Value>{incomesSum}</Value>
        </ItemBox>
        <ItemBox>
          Koszty: <Value>{costsSum}</Value>
        </ItemBox>
        <ItemBox>
          Bilans: <Value>{result}</Value>
        </ItemBox>
        <ItemBox>
          <Button
            onClick={() =>
              dispatch(
                addDataBase({
                  incomesSum: incomesSum,
                  costsSum: costsSum,
                  result: result,
                  date: incomes[0].date.slice(3),
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
