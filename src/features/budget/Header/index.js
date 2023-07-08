import { HeaderPage, Wrapper } from "./styled";
import { DataBox, ItemBox, Value, Button } from "../../../common/Result";
import { useSelector, useDispatch } from "react-redux";
import { selectIncomesSum, selectIncomes } from "../Logic/incomes/incomesSlice";
import { selectCostsSum, selectCosts } from "../Logic/costs/costsSlice";
import { selectResultState } from "../Logic/resultSlice";
import { addDataBase } from "../Logic/dataBase/dataBaseSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const { incomes } = useSelector(selectIncomes);
  const costsSum = useSelector(selectCostsSum);
  const { result } = useSelector(selectResultState);
  const { costs } = useSelector(selectCosts);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <HeaderPage>Poznaj swój budżet</HeaderPage>
      <DataBox>
        {incomes.length >= 1 ? (
          <ItemBox>
            {new Date(incomes[0].date).toLocaleDateString(undefined, {
              month: "numeric",
              year: "numeric",
            })}
          </ItemBox>
        ) : (
          ""
        )}
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
                  incomesDataBase: [...incomes],
                  costsDataBase: { ...costs },
                  incomesSum: incomesSum,
                  costsSum: costsSum,
                  result: result,
                  date: incomes.length >= 1 ? incomes[0].date : "wpisz miesiąc",
                  id: nanoid(),
                })
              )
            }
            title="Dodaj ostateczny bilans miesięczny do tablicy"
          >
            ➕
          </Button>
        </ItemBox>
      </DataBox>
    </Wrapper>
  );
};