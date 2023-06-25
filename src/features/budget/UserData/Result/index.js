import { useSelector } from "react-redux";
import { selectIncomesSumState } from "../../incomesSlice";
import { selectCostsSumState } from "../../costsSlice";
import { calculateResult, selectResult } from "../../resultSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "../common styled/Button";

export const Result = () => {
  const { incomesSum } = useSelector(selectIncomesSumState);
  const { costsSum } = useSelector(selectCostsSumState);
  const { result } = useSelector(selectResult);
  const dispatch = useDispatch();

  console.log(incomesSum);
  console.log(costsSum);

  // useEffect(() => {
  //   dispatch(calculateResult(incomesSum, costsSum));
  // }, [dispatch, incomesSum, costsSum]);

  return (
    <div>
      <Button onClick={() => dispatch(calculateResult(incomesSum, costsSum))}>
        Oblicz bilans
      </Button>
      Bilans:{result}
    </div>
  );
};
