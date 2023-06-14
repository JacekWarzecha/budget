import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addCost, deleteCost } from "../../costsSlice";
import { selectCosts } from "../../costsSlice";
// import { List } from "./styled";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button, ButtonDelete } from "../Button";
import { RenderList } from "../RenderList";
import { ItemWrapper } from "../ItemWrapper";
import { Content } from "../styled/Content";
import { Amount } from "../styled/Amount";
import { DateAdded } from "../styled/DateAdded";

export default () => {
  const dispatch = useDispatch();
  const { costs } = useSelector(selectCosts);

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

  const [costsSum, setCostsSum] = useState(0);

  const calculateCostsSum = () => costs.reduce((a, b) => (a = a + b.amount), 0);

  // useEffect(() => {
  //   setCostsSum(calculateCostsSum);
  // }, [costs]);

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
        Koszt
        {costs &&
          costs.map((cost) => (
            <ItemWrapper key={cost.id}>
              <Content>{cost.content}</Content>
              <Amount>{cost.amount}</Amount>
              <DateAdded>{cost.date}</DateAdded>
              <ButtonDelete onClick={() => dispatch(deleteCost(cost.id))}>
                Usuń
              </ButtonDelete>
            </ItemWrapper>
          ))}
        <ItemWrapper>Razem: {costsSum}</ItemWrapper>
        <p>
          <button onClick={() => calculateCostsSum()}>Koszty łącznie</button>
        </p>
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
