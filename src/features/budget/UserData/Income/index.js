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
import { SubTitle } from "../../../../common/render/SubTitle";
import { InputContainer } from "../../../../common/render/InputContainer";
import { IncomesSum } from "./styled";

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
    const trimmedNewIncomeContent = newIncomeContent.trim();

    if (trimmedNewIncomeContent !== "") {
      dispatch(
        addIncome({
          amount: +newIncome,
          content: trimmedNewIncomeContent,
          id: nanoid(),
          date: new Date(),
        })
      );
      setNewIncomeContent("");
      setNewIncome("");
    } else {
      alert("Wpisz nazwę przychodu");
    }
  };
  console.log(incomes);

  useEffect(() => {
    dispatch(calculateIncomesSum(incomes));
  }, [dispatch, incomes]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <SubTitle>Uzupełnij przychód</SubTitle>
        <InputContainer>
          <Input
            min="1"
            value={newIncomeContent}
            onChange={onInputContentChange}
            placeholder="Nazwa przychodu"
          />
          <Input
            type="number"
            value={newIncome}
            onChange={onInputChange}
            placeholder="Wysokość przychodu"
            required
            pattern="[0-9]"
            step="1"
            min="1"
          />
          <Button>Dodaj przychód</Button>
        </InputContainer>
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
          <IncomesSum>
            Razem:&nbsp;<Sum>{incomesSum}</Sum>
          </IncomesSum>
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
            {income.date && (
              <DateAdded>
                {new Date(income.date).toLocaleDateString()}
              </DateAdded>
            )}
            <ButtonDelete onClick={() => dispatch(deleteIncome(income.id))}>
              🗑️
            </ButtonDelete>
          </ItemWrapper>
        ))}
        {/* <ItemEnd>
          Razem:&nbsp;<Sum>{incomesSum}</Sum>
        </ItemEnd> */}
      </RenderList>
    </>
  );
};
