import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../costsSlice";
import {
  addCost,
  deleteCost,
  selectCosts,
  selectCostsSumState,
  calculateCostsSum,
} from "../../costsSlice";
// import { List } from "./styled";
import { Form } from "../common styled/Form";
import { Input } from "../common styled/Input";
import { Button, ButtonDelete } from "../common styled/Button";
import { RenderList } from "../common styled/RenderList";
import { ItemEnd, ItemWrapper } from "../common styled/ItemWrapper";
import { Content } from "../common styled/Content";
import { Amount } from "../common styled/Amount";
import { DateAdded } from "../common styled/DateAdded";
import { Diagram } from "./styled";
import { Title } from "../common styled/Title";

export default () => {
  const dispatch = useDispatch();
  const { costs } = useSelector(selectCosts);
  const { costsSum } = useSelector(selectCostsSumState);

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
      addCost({
        amount: +newCosts,
        content: newCostsContent,
        id: nanoid(),
        date: new Date().toLocaleDateString(),
      })
    );
    setNewCosts("");
    setnewCostsContent("");
  };

  useEffect(() => {
    dispatch(calculateCostsSum(costs));
  }, [dispatch, costs]);

  // const calculateResult = (a, b) => {
  //   const result = a - b;
  //   return result;
  // };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={newCostsContent}
          onChange={costsContentChange}
          placeholder="Nazwa kosztu"
          required
        />
        <Input
          type="number"
          value={newCosts}
          onChange={costsChange}
          placeholder="Wysokość kosztu"
          required
          pattern="[0-9]"
          step="1"
          min="1"
        />
        <Button>Dodaj koszt</Button>
      </Form>
      <RenderList>
        <Title>Koszt</Title>
        {costs &&
          costs.map((cost) => (
            <ItemWrapper key={cost.id}>
              <Content>{cost.content}</Content>
              <Amount>{cost.amount}</Amount>
              <DateAdded>{cost.date}</DateAdded>
              <ButtonDelete onClick={() => dispatch(deleteCost(cost.id))}>
                🗑️
              </ButtonDelete>
            </ItemWrapper>
          ))}
        <ItemEnd>Razem: {costsSum}</ItemEnd>
        {/* <p>
          <button onClick={() => calculateCostsSum()}>Koszty łącznie</button>
        </p> */}
      </RenderList>
      <p>
        {/* Koszty wynoszą :<button>Oblicz bilans</button> */}
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
