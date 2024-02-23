import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { allTransaction } = useSelector((store) => store.transactions);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  console.log(allTransaction);

  useEffect(() => {
    setTotalIncome(
      allTransaction.reduce(
        (acc, curr) => acc + Number(curr.type === "income" ? curr.amount : 0),
        0
      )
    );

    setTotalExpense(
      allTransaction.reduce(
        (acc, curr) => acc + Number(curr.type === "expense" ? curr.amount : 0),
        0
      )
    );
  }, [allTransaction]);
  console.log(totalIncome, totalExpense);

  return (
    <div className="flex">
      <div className="p-5 flex flex-col gap-5 font-bold text-center bg-black/10 w-full">
        <p>Balance is ${totalIncome - totalExpense}</p>
        <div>
          <p className="text-3xl">${totalIncome}</p>
          <span className="font-normal text-black/40">Total Income</span>
        </div>
        <div>
          <p className="text-3xl">${totalExpense}</p>
          <span className="font-normal text-black/40">Total Expense</span>
        </div>
      </div>
      <div className="w-full bg-black/10">CHART</div>
    </div>
  );
};

export default MainContainer;
