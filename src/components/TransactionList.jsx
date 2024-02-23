import React from "react";
import { useSelector } from "react-redux";

const TransactionList = () => {
  const { allTransaction } = useSelector((store) => store.transactions);

  return (
    <div className="flex gap-2 p-3 h-auto">
      <div className="p-1 bg-green-200 w-full">
        <p className="text-red-800 font-bold text-lg">Income</p>
        <ul className="list-none">
          {allTransaction
            .filter((item) => item.type === "income")
            .map((item, index) => (
              <li
                className="flex justify-between py-1 px-3 rounded-md bg-green-500 text-white mt-2"
                key={index}
              >
                <p>{item.description}</p>
                <p>{item.time.slice(0, 24)}</p>
                <p>${item.amount}</p>
              </li>
            ))}
        </ul>
      </div>

      <div className="p-1 w-full bg-green-200">
        <p className="text-red-800 font-bold text-lg">Expense</p>
        <ul className="list-none">
          {allTransaction
            .filter((item) => item.type === "expense")
            .map((item, index) => (
              <li
                className="flex justify-between py-1 px-3 rounded-md bg-red-500 text-white mt-2 mb-2"
                key={index}
              >
                <p>{item.description}</p>
                <p>${item.amount}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
