import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addIncome } from "../../budgetSlice";
import { selectIncomes } from "../../budgetSlice";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { RenderList } from "../RenderList";
import { Paragraph } from "../Paragraph";

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
      addIncome({ amount: +newIncome, content: newIncomeContent, id: nanoid() })
    );
    setNewIncomeContent("");
    setNewIncome("");
  };

  const [incomesSum, setIncomesSum] = useState(0);

  const calculateIncomesSum = () =>
    incomes.reduce((a, b) => (a = a + b.amount), 0);

  useEffect(() => {
    setIncomesSum(calculateIncomesSum);
  }, [incomes]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={newIncomeContent}
          onChange={onInputContentChange}
          placeholder=" Nazwa przychodu"
          required
        />
        <Input
          type="number"
          value={newIncome}
          onChange={onInputChange}
          placeholder=" Wysokość przychodu"
          required
          pattern="[0-9]"
          step="1"
          min="1"
        />
        <Button>Dodaj przychód</Button>
      </Form>
      <RenderList>
        Przychód
        {incomes.map((income) => (
          <Paragraph key={income.id}>
            {income.content}&nbsp;:&nbsp;
            {income.amount}
          </Paragraph>
        ))}
        <Paragraph>Razem: {incomesSum}</Paragraph>
        <Paragraph></Paragraph>
      </RenderList>
      <p>
        {/* <button onClick={() => calculateIncomesSum()}>Przychód łącznie</button> */}
      </p>
    </>
  );
};
