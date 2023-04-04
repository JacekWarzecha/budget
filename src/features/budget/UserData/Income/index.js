import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addIncome } from "../../budgetSlice";
import { selectIncomes } from "../../budgetSlice";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { RenderList } from "../RenderList";

export default () => {
  const dispatch = useDispatch();
  const { incomes } = useSelector(selectIncomes);

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
      addIncome({ amount: newIncome, content: newIncomeContent, id: nanoid() })
    );
  };
  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={newIncomeContent}
          onChange={onInputContentChange}
          placeholder=" Nazwa przychodu"
        />
        <Input
          type="number"
          value={newIncome}
          onChange={onInputChange}
          placeholder="Wysokość przychodu"
        />
        <Button>Dodaj przychód</Button>
      </Form>

      <RenderList>
        Przychód miesięczny
        {incomes.map((income) => (
          <p key={income.id}>
            {income.content}&nbsp;:&nbsp;
            {income.amount}
          </p>
        ))}
      </RenderList>
    </>
  );
};
