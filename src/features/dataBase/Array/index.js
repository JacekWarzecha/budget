import { useSelector, useDispatch } from "react-redux";
import {
  selectDataBase,
  deleteDataBase,
} from "../../budget/Logic/dataBase/dataBaseSlice";
import { DataBox, ItemBox, Value, Button } from "../../../common/Result";
import { Wrapper } from "./styled";
import { ButtonDelete } from "../../../common/render/Button";

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
          {/* {dataIncomes.map((element) => (
            <p>{element}</p>
          ))} */}

          {/* <ItemBox>{dataIncomes.map((element) => element.amount)}</ItemBox> */}
          {/* {data.Object.values(dataIncomes).map((element) => (
              <p>{element}</p>
            ))} */}
          {/* <ItemBox>
            {Object.values(dataBase).map(({ amount }, index) => (
              <p key={index}>{amount}</p>
            ))}
          </ItemBox> */}

          {/* <ItemBox>
            {dataBase.content.map((content) => content.content.join(","))}
          </ItemBox> */}
          {/* {data.content} */}
          {/* {Object.keys(dataBase).map((data, index) => (
            <p key={index}>{data.amount}</p>
          ))} */}
          {/* {dataBase.map((data) => (
            <p key={data.id}>{data.content}</p>
          ))} */}
          <ButtonDelete onClick={() => dispatch(deleteDataBase(data.id))}>
            ➖
          </ButtonDelete>
        </DataBox>
      ))}
      {console.log(dataBase)}

      {/* {dataBase.DataIncomes.map((element) => (
        <p key={element.id}>{element.amount}</p>
      ))} */}

      {/* {Object.keys(dataBase.dataIncomes || {}).map(({ amount, id }) => (
        <p key={id}>nanan{amount}</p>
      ))}
      nana
      {Object.keys(dataBase.dataIncomes || {}).map(({ amount, id }, index) => (
        <div key={index}>
          <p>{amount}</p>
        </div>
      ))} */}
    </Wrapper>
  );
};
