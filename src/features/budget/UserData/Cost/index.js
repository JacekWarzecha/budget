import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCost, selectIncomes } from "../../budgetSlice";
import { selectCost } from "../../budgetSlice";
import { List } from "./styled";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { RenderList } from "../RenderList";

export default () => {
  const dispatch = useDispatch();
  const { costs } = useSelector(selectCost);
  const { incomes } = useSelector(selectIncomes);

  const [newCosts, setNewCosts] = useState("");
  const [newCostsContent, setnewCostsContent] = useState("");

  const costsChange = ({ target }) => {
    setNewCosts((costs) => (costs = target.value));
  };

  const costsContentChange = ({ target }) => {
    setnewCostsContent((newCostsContent) => (newCostsContent = target.value));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCost({ amount: newCosts, content: newCostsContent, id: nanoid() })
    );
    setNewCosts("");
    setnewCostsContent("");
    // costsResult();
    // console.log(sum);
  };

  // let sum = 0;
  // const costsResult = () => {
  //   for (let i = 0; i < costs.length; i++) {
  //     sum = sum + costs[i];
  //   }
  // };

  // const tablica = [25, 10, 25];
  // let sum = 0;

  // const tablicaResult = () => {
  //   for (let i in tablica) {
  //     sum += tablica[i];
  //     console.log(+sum);
  //   }
  // };
  // tablicaResult();

  // const [result, setResult] = useState();

  // const calculateCosts = () => {
  //   setResult
  //   let sum = 0;
  //   for (let cost of costs) {
  //     sum = sum + costs[cost];
  //     console.log(sum);
  //   }
  // };

  // const calculateResult = (a, b) => {
  //   const result = a - b;
  //   return result;
  // };

  // const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={newCostsContent}
          onChange={costsContentChange}
          placeholder="Nazwa kosztu"
        />
        <Input
          type="number"
          value={newCosts}
          onChange={costsChange}
          placeholder="Wysokość kosztu"
        />

        <Button>Dodaj koszt</Button>
      </Form>
      <RenderList>
        Koszt
        <List>
          {costs.map((cost) => (
            <li key={cost.id}>
              {cost.content}&nbsp;:&nbsp;{cost.amount}
            </li>
          ))}
        </List>
      </RenderList>
      <p>
        Koszty wynoszą :<button>Oblicz bilans</button>
        {/* {Object.values(costs).map((cost) => cost.amount)} */}
        {/* {Object.values(costs).map((cost) => (
          <li key={cost.id}>{cost.amount}</li>
        ))}{" "}
        -{" "}
        {Object.values(incomes).map((income) => (
          <li key={income.id}>{income.amount}</li>
        ))} */}
      </p>
    </>
  );
};
