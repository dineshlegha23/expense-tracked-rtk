import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { allTransaction } = useSelector((store) => store.transactions);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const options = {
    series: [totalIncome, totalExpense],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Income", "Expense"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

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

  return (
    <div className="flex">
      <div className="p-5 flex flex-col gap-5 font-bold text-center bg-black/10 w-full justify-center">
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
      <div className="w-full bg-black/10">
        <Chart
          options={options.options}
          series={options.series}
          type="pie"
          width={450}
          height={320}
        />
      </div>
    </div>
  );
};

export default MainContainer;
