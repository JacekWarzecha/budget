import { HeaderPage, Wrapper, DataBox, ItemBox, Value } from "./styled";
import { useSelector } from "react-redux";
import { selectIncomesSum, selectIncomes } from "../incomesSlice";
import { selectCostsSum } from "../costsSlice";
import { selectResultState } from "../resultSlice";
import { Button } from "../UserData/common styled/Button";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const { incomes } = useSelector(selectIncomes);
  const costsSum = useSelector(selectCostsSum);
  const { result } = useSelector(selectResultState);
  console.log();

  return (
    <Wrapper>
      <HeaderPage>Poznaj swój budżet</HeaderPage>
      <DataBox>
        <ItemBox date>{incomes[0].date.slice(3)}</ItemBox>
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
          <Button title="Na koniec miesiąca dodaj bilans do tablicy">➕</Button>
        </ItemBox>
      </DataBox>
    </Wrapper>
  );
};
