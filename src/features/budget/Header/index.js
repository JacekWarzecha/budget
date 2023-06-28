import { HeaderPage, Wrapper, DataBox, ItemBox } from "./styled";
import { useSelector } from "react-redux";
import { selectIncomesSum } from "../incomesSlice";
import { selectCostsSum } from "../costsSlice";
import { selectResultState } from "../resultSlice";

export const Header = () => {
  const incomesSum = useSelector(selectIncomesSum);
  const costsSum = useSelector(selectCostsSum);
  const { result } = useSelector(selectResultState);

  return (
    <Wrapper>
      <HeaderPage>Oblicz swój budżet</HeaderPage>
      <DataBox>
        <ItemBox>Przychody: {incomesSum}</ItemBox>
        <ItemBox>Koszty: {costsSum}</ItemBox>
        <ItemBox>Bilans: {result}</ItemBox>
      </DataBox>
    </Wrapper>
  );
};
