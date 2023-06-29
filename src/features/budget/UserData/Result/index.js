import { useSelector } from "react-redux";
import { selectIncomesSumState } from "../../incomesSlice";
import { selectCostsSumState } from "../../costsSlice";
import { calculateResult, selectResultState } from "../../resultSlice";
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
