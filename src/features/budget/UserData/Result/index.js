import { useSelector } from "react-redux";
import { selectIncomesSum } from "../../incomesSlice";
import { selectCostsSum } from "../../costsSlice";
import { calculateResult, selectResult } from "../../resultSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "../common styled/Button";

export const Result = () => {
  const { incomesSum } = useSelector(selectIncomesSum);
  const { costsSum } = useSelector(selectCostsSum);
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
