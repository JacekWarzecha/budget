import { useSelector, useDispatch } from "react-redux";
import {
  selectDataBase,
  deleteDataBase,
  selectIncomesYearState,
  calculateIncomesYear,
  selectCostsYearState,
  calculateCostsYear,
  selectResultYearState,
  calculateResultYear,
} from "../../Logic/dataBase/dataBaseSlice";
import { DataBox, ItemBox, Value, Button } from "../../../common/Result";
import { Wrapper } from "./styled";
import { ButtonDelete } from "../../../common/render/Button";
import { addYearsList } from "../../Logic/yearsList/yearsListSlice";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const Array = () => {
  const dataBase = useSelector(selectDataBase);
  const dispatch = useDispatch();
  const { incomesYear } = useSelector(selectIncomesYearState);
  const { costsYear } = useSelector(selectCostsYearState);
  const { resultYear } = useSelector(selectResultYearState);
  // console.log(dataBase.costsDataBase);
  // console.log(dataBase.incomesDataBase);
  console.log(dataBase);

  // const Loop = () => {
  //   for (const property in dataBase) {
  //     console.log(dataBase[property]["costsDataBase"][property]);
  //   }
  // };

  // const Loop = () => {
  //   for (const property in dataBase) {
  //     console.log(dataBase[property].costsDataBase[property]);
  //   }
  // };

  // for (const property in dataBase) {
  //   for (const propertySecond in property)
  //     for (const propertyThird in propertySecond)
  //       console.log(dataBase[property][propertySecond]["content"]);
  // }

  // const obiekt = [
  //   {
  //     props: { pierwsza: "nanan", druga: 255 },
  //     props2: { pierwsza: "blabla", druga: 455 },
  //   },
  // ];

  // for (const propix in dataBase) {
  //   console.log(dataBase[propix][propix]);
  // }

  // const funkcja = () => {
  //   for (const prop in obiekt) {
  //     obiekt[prop].pierwsza + ",," + obiekt[prop].druga;
  //   }
  // };

  // const funkcja = () => {
  //   for (const prop in obiekt) {
  //     console.log(obiekt[prop].pierwsza + ",," + obiekt[prop].druga);
  //   }
  // };

  // Using array methods
  // Object.entries(obj).forEach(([key, value]) => {
  //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
  // });

  // for (const element of dataBase) {
  //   console.log(dataBase.element);
  // }

  // console.log(dataBase);

  // for (const property in dataBase) {
  //   console.log(dataBase[property]["costsDataBase"][property]["content"]);
  // }

  // const todo = useSelector((state) => state.todos[props.id]);
  // console.log(dataBase);
  // console.log(incomesYear);

  // const incomesDataBase = useSelector(selectIncomesDataBase);
  // console.log(incomesDataBase);

  // dataBase.forEach((element) => {
  //   for (let value in element) console.log(element[value]);
  // });

  // for (let element in Object.keys(dataBase.costsDataBase || {})) {
  //   for (let key in dataBase.costsDataBase[element]) {
  //     console.log(dataBase[element][key]);
  //   }
  // }

  // for (let element in Object.keys(dataBase || {})) {
  //   for (let key in dataBase[element]) {
  //     console.log(dataBase[element][key]);
  //   }
  // }

  // for (let element in Object.keys(dataBase || {})) {
  //   for (let key in dataBase[element]) {
  //     for (let e in dataBase[element].costsDataBase) {
  //       console.log(dataBase[element][key][e]);
  //     }
  //   }
  // }

  // for (let prop in dataBase) {
  //   if (Object.prototype.hasOwnProperty.call(dataBase, prop)) {
  //     console.log(dataBase[prop].costsDataBase[prop].content);
  //   }
  // }

  // Object.keys(dataBase).forEach((e) =>
  //   console.log(`key=${e}  value=${dataBase[e].costsDataBase[e].amount}`)
  // );

  // const Looping = () => {
  //   for (let element in Object.keys(dataBase || {})) {
  //     {
  //       console.log(dataBase[element]["costsDataBase"][element]);
  //     }
  //   }
  // };

  // Looping();

  useEffect(() => {
    dispatch(calculateIncomesYear(dataBase));
  }, [dispatch, dataBase]);

  useEffect(() => {
    dispatch(calculateCostsYear(dataBase));
  }, [dispatch, dataBase]);

  useEffect(() => {
    dispatch(calculateResultYear({ incomesYear, costsYear }));
  }, [dispatch, { incomesYear, costsYear }]);

  return (
    <Wrapper>
      {/* <button onClick={() => funkcja()}>tutaj</button> */}
      {/* {obiekt.map(({ pierwsza, druga }) => (<div key={pierwsza}>{[pierwsza]: druga })</div>))} */}
      <DataBox>
        <ItemBox firstColor>
          {dataBase.length >= 1
            ? dataBase[0].date && new Date(dataBase[0].date).getFullYear()
            : "Rok"}
        </ItemBox>
        <ItemBox>
          Przychody:&nbsp;<Value>{incomesYear}</Value>
        </ItemBox>
        <ItemBox>
          Koszty:&nbsp;<Value>{costsYear}</Value>
        </ItemBox>
        <ItemBox>
          Bilans:&nbsp;<Value>{resultYear}</Value>
        </ItemBox>
        <ItemBox>
          <Button
            onClick={() => {
              if (dataBase.length >= 1) {
                dispatch(
                  addYearsList({
                    dateYear: dataBase[0].date,
                    incomesYear: incomesYear,
                    costsYear: costsYear,
                    resultYear: resultYear,
                    id: nanoid(),
                  })
                );
              } else {
                alert("Naciśnij jeśli chcesz zamknąć dany rok");
              }
            }}
          >
            ➕
          </Button>
        </ItemBox>
      </DataBox>
      {dataBase?.map((data) => (
        <DataBox key={data.id} layoutBox>
          {/* <ItemBox>
            <button onClick={() => Loop()}>szczegóły</button>
          </ItemBox> */}
          <ItemBox firstColor layout>
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
            {Object.values(dataBase.incomesDataBase || {}).map((element) => (
              <ItemBox key={element.id}>{element.content}</ItemBox>
            ))}
          </div> */}
          {/* <div>
            {Object.values(dataBase.costsDataBase || {}).map((element) => (
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
      {/* {console.log(dataBase)} */}

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
