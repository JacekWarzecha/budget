import { HeaderPage, Wrapper, DataBox, ItemBox } from "./styled";
import { useSelector } from "react-redux";
import { selectIncomesSum } from "../incomesSlice";
import { selectCostsSum } from "../costsSlice";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const costsSum = useSelector(selectCostsSum);

  return (
    <Wrapper>
      <HeaderPage>Oblicz swój budżet</HeaderPage>
      <DataBox>
        <ItemBox>Przychody: {incomesSum}</ItemBox>
        <ItemBox>Koszty: {costsSum}</ItemBox>
      </DataBox>
    </Wrapper>
  );
};
