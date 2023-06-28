import { useSelector } from "react-redux";
import { selectIncomesSumState } from "../../incomesSlice";
import { selectCostsSumState } from "../../costsSlice";
import { calculateResult, selectResultState } from "../../resultSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "../common styled/Button";

export const Result = () => {
  const { incomesSum } = useSelector(selectIncomesSumState);
  const { costsSum } = useSelector(selectCostsSumState);
  const { result } = useSelector(selectResultState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateResult({ incomesSum, costsSum }));
  }, [dispatch, { incomesSum, costsSum }]);

  // const calc = (a, b) => a - b;
  // console.log(calc(5, 2));

  // console.log(incomesSum - costsSum);
  return (
    <div>
      {/* <Button
        onClick={() => dispatch(calculateResult({ incomesSum, costsSum }))}
      >
        Oblicz bilans
      </Button> */}
      Bilans: {result}
    </div>
  );
};
