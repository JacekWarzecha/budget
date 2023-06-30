import { useSelector, useDispatch } from "react-redux";
import {
  selectDataBase,
  deleteDataBase,
} from "../../budget/Logic/dataBase/dataBaseSlice";
import { DataBox, ItemBox, Value, Button } from "../../../common/Result";
import { Wrapper } from "./styled";

export const Array = () => {
  const dataBase = useSelector(selectDataBase);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {dataBase.map((data) => (
        <DataBox key={data.id} layout>
          <ItemBox>{data.date}</ItemBox>
          <ItemBox>
            Przychody:&nbsp;<Value>{data.incomesSum}</Value>
          </ItemBox>
          <ItemBox>
            Koszty:&nbsp;<Value>{data.costsSum}</Value>
          </ItemBox>
          <ItemBox>
            Bilans:&nbsp;<Value>{data.result}</Value>
          </ItemBox>
          <Button onClick={() => dispatch(deleteDataBase(data.id))}>➖</Button>
        </DataBox>
      ))}
    </Wrapper>
  );
};
