import { useSelector, useDispatch } from "react-redux";
import {
  selectDataBaseState,
  deleteDataBase,
  selectIncomesYearState,
  selectIncomesYear,
  calculateIncomesYear,
} from "../../budget/Logic/dataBase/dataBaseSlice";
import { DataBox, ItemBox, Value, Button } from "../../../common/Result";
import { Wrapper } from "./styled";
import { ButtonDelete } from "../../../common/render/Button";
import { useEffect } from "react";

export const Array = () => {
  const { dataBase } = useSelector(selectDataBaseState);
  const dispatch = useDispatch();
  const { incomesYear } = useSelector(selectIncomesYearState);
  console.log(dataBase);
  console.log(incomesYear);

  useEffect(() => {
    dispatch(calculateIncomesYear(dataBase));
  }, [dispatch, dataBase]);

  return (
    <Wrapper>
      <DataBox>
        <ItemBox>
          {dataBase.length >= 1
            ? dataBase[0].date && new Date(dataBase[0].date).getFullYear()
            : "Rok"}
        </ItemBox>
        <ItemBox>
          Przychody: <Value>{incomesYear}</Value>
        </ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
      </DataBox>
      {dataBase?.map((data, { costsDataBase, incomesDataBase }) => (
        <DataBox key={data.id} layoutBox>
          <ItemBox layout>
            {new Date(data.date).toLocaleDateString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </ItemBox>

          <ItemBox layout>
            Przychody:&nbsp;<Value>{data.incomesSum}</Value>
          </ItemBox>
          <ItemBox layout>
            Koszty:&nbsp;<Value>{data.costsSum}</Value>
          </ItemBox>
          <ItemBox layout>
            Bilans:&nbsp;<Value>{data.result}</Value>
          </ItemBox>
          {/* <div>
            {Object.values(dataBase[0].incomesDataBase || {}).map((element) => (
              <ItemBox key={element.id}>{element.content}</ItemBox>
            ))}
          </div> */}
          {/* <ItemBox>
            {incomesDataBase?.map((element) => element.content)}
          </ItemBox>
          <ItemBox>
            {Object.keys(costsDataBase || {}).map((element) => element.content)}
          </ItemBox> */}

          {/* <ItemBox>
            {Object.keys(dataBase.incomesDataBase || {}).map((element) => (
              <p>{element.content}</p>
            ))}
          </ItemBox> */}
          {/* <ItemBox>
            {data.incomesDataBase.map((element) => element.amount)}
          </ItemBox> */}
          {/* <ItemBox>
            {incomesDataBase.map((element) => (
              <p>{element}</p>
            ))}
          </ItemBox> */}
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
