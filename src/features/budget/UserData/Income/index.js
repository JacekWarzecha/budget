import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addIncome,
  deleteIncome,
  calculateIncomesSum,
  selectIncomes,
  selectIncomesSumState,
  deleteIncomesAll,
} from "../../Logic/incomes/incomesSlice";
import { addDataBaseIncomes } from "../../Logic/dataBase/dataBaseSlice";
import { Form } from "../../../../common/render/Form";
import { Input } from "../../../../common/render/Input";
import { Button, ButtonDelete } from "../../../../common/render/Button";
import { RenderList } from "../../../../common/render/RenderList";
import { ItemEnd, ItemWrapper } from "../../../../common/render/ItemWrapper";
import { Content } from "../../../../common/render/Content";
import { Amount } from "../../../../common/render/Amount";
import { fetchExampleIncomes } from "../../Logic/incomes/incomesSlice";
import { DateAdded } from "../../../../common/render/DateAdded";
import { Title } from "../../../../common/render/Title";
import { Sum } from "../../../../common/render/Sum";
import { ButtonAdd } from "../../../../common/Result";
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
        date: new Date().toLocaleDateString(undefined, {
          month: "numeric",
          year: "numeric",
        }),
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
      {/* <Button onClick={() => dispatch(fetchExampleIncomes())}>
        pobierz pd income
      </Button> */}
      <RenderList>
        <Title>
          {/* <ButtonAdd onClick={() => dispatch(addDataBaseIncomes([...incomes]))}>
            ➕
          </ButtonAdd> */}
          Przychód
          <ButtonDelete
            onClick={() => dispatch(deleteIncomesAll())}
            title="Usuń wszystkie bieżące przychody"
          >
            ➖
          </ButtonDelete>
        </Title>
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
          Razem:&nbsp;<Sum>{incomesSum}</Sum>
        </ItemEnd>
      </RenderList>
    </>
  );
};
