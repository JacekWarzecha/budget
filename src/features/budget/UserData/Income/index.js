import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addIncome,
  deleteIncome,
  calculateIncomesSum,
  selectIncomes,
  selectIncomesSumState,
} from "../../incomesSlice";
import { Form } from "../common styled/Form";
import { Input } from "../common styled/Input";
import { Button, ButtonDelete } from "../common styled/Button";
import { RenderList } from "../common styled/RenderList";
import { ItemEnd, ItemWrapper } from "../common styled/ItemWrapper";
import { Content } from "../common styled/Content";
import { Amount } from "../common styled/Amount";
import { fetchExampleIncomes } from "../../incomesSlice";
import { DateAdded } from "../common styled/DateAdded";
import { Title } from "../common styled/Title";

export const Income = () => {
  const dispatch = useDispatch();
  const { incomes } = useSelector(selectIncomes);
  const { incomesSum } = useSelector(selectIncomesSumState);

  const [newIncomeContent, setNewIncomeContent] = useState("");
  const [newIncome, setNewIncome] = useState("");

  const onInputContentChange = ({ target }) => {
    setNewIncomeContent(
      (newIncomeContent) => (newIncomeContent = target.value)
    );
  };

  const onInputChange = ({ target }) => {
    setNewIncome((income) => (income = target.value));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addIncome({
        amount: +newIncome,
        content: newIncomeContent,
        id: nanoid(),
        date: new Date().toLocaleDateString(),
      })
    );
    setNewIncomeContent("");
    setNewIncome("");
  };

  useEffect(() => {
    dispatch(calculateIncomesSum(incomes));
  }, [dispatch, incomes]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={newIncomeContent}
          onChange={onInputContentChange}
          placeholder=" Nazwa przychodu . . ."
          required
        />
        <Input
          type="number"
          value={newIncome}
          onChange={onInputChange}
          placeholder=" Wysokość przychodu . . ."
          required
          pattern="[0-9]"
          step="1"
          min="1"
        />
        <Button>Dodaj przychód</Button>
      </Form>
      {/* <Button onClick={() => dispatch(fetchExampleIncomes())}>
        pobierz pd income
      </Button> */}
      <RenderList>
        <Title>Przychód</Title>
        {incomes?.map((income) => (
          <ItemWrapper key={income.id}>
            <Content>{income.content}</Content>
            <Amount>{income.amount}</Amount>
            {income.date && <DateAdded>{income.date}</DateAdded>}
            <ButtonDelete onClick={() => dispatch(deleteIncome(income.id))}>
              🗑️
            </ButtonDelete>
          </ItemWrapper>
        ))}
        <ItemEnd>
          Razem: {incomesSum}
          {/* {incomesSum !== undefined && <span>Razem: {incomesSum}</span>} */}
        </ItemEnd>
      </RenderList>
      {/* <p>
        <button onClick={() => dispatch(calculateIncomesSum(incomes))}>
          Przychód łącznie
        </button>
      </p> */}
    </>
  );
};
