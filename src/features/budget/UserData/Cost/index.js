import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../Logic/costs/costsSlice";
import {
  addCost,
  deleteCost,
  selectCosts,
  selectCostsSumState,
  calculateCostsSum,
  deleteCostsAll,
} from "../../Logic/costs/costsSlice";
// import { List } from "./styled";
import { Form } from "../../../../common/render/Form";
import { Input } from "../../../../common/render/Input";
import { Button, ButtonDelete } from "../../../../common/render/Button";
import { RenderList } from "../../../../common/render/RenderList";
import { ItemEnd, ItemWrapper } from "../../../../common/render/ItemWrapper";
import { Content } from "../../../../common/render/Content";
import { Amount } from "../../../../common/render/Amount";
import { DateAdded } from "../../../../common/render/DateAdded";
import { Diagram } from "./styled";
import { Title } from "../../../../common/render/Title";
import { Sum } from "../../../../common/render/Sum";
import { SubTitle } from "../../../../common/render/SubTitle";
import { InputContainer } from "../../../../common/render/InputContainer";
import { CostsSum } from "./styled";

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
        date: new Date(),
      })
    );
    setNewCosts("");
    setnewCostsContent("");
  };

  useEffect(() => {
    dispatch(calculateCostsSum(costs));
  }, [dispatch, costs]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <SubTitle>Uzupełnij koszty</SubTitle>
        <InputContainer>
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
        </InputContainer>
      </Form>
      <RenderList>
        <Title>
          Koszt
          <CostsSum>
            Razem:&nbsp;<Sum>{costsSum}</Sum>
          </CostsSum>
          <ButtonDelete onClick={() => dispatch(deleteCostsAll())}>
            ➖
          </ButtonDelete>
        </Title>
        {costs &&
          costs.map((cost) => (
            <ItemWrapper key={cost.id}>
              <Content>{cost.content}</Content>
              <Amount>{cost.amount}</Amount>
              <DateAdded>{new Date(cost.date).toLocaleDateString()}</DateAdded>
              <ButtonDelete onClick={() => dispatch(deleteCost(cost.id))}>
                🗑️
              </ButtonDelete>
            </ItemWrapper>
          ))}
        {/* <ItemEnd>
          Razem:&nbsp;<Sum>{costsSum}</Sum>
        </ItemEnd> */}
      </RenderList>
    </>
  );
};
