import { useSelector } from "react-redux";
import { selectDataBase } from "../../budget/Logic/dataBase/dataBaseSlice";

export const Array = () => {
  const dataBase = useSelector(selectDataBase);

  return (
    <div>
      Tutaj wypisze bilanse:
      {dataBase.map((data) => (
        <div key={data.id}>
          <li>{data.incomesSum}</li>
          <li>{data.costsSum}</li>
          <li>{data.result}</li>
          <li>{data.date}</li>
        </div>
      ))}
    </div>
  );
};
