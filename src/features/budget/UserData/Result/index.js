import { useSelector } from "react-redux";
import { selectIncomesSumState } from "../../Logic/incomes/incomesSlice";
import { selectCostsSumState } from "../../Logic/costs/costsSlice";
import { calculateResult, selectResultState } from "../../Logic/resultSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Result = () => {
  const { incomesSum } = useSelector(selectIncomesSumState);
  const { costsSum } = useSelector(selectCostsSumState);
  const { result } = useSelector(selectResultState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateResult({ incomesSum, costsSum }));
  }, [dispatch, { incomesSum, costsSum }]);

  return;
};
