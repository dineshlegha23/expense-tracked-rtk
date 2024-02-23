import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../store/transactionSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ description, amount, type: transactionType }));
    setDescription("");
    setAmount("");
    setIsModalOpen(false);
  };

  const onRadioChange = (e) => {
    setTransactionType(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between p-5">
        <h1 className="font-bold text-blue-500 text-2xl">Expense Tracker</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 rounded-lg px-2 text-white hover:bg-blue-700 transition-all"
        >
          Add New Transaction
        </button>
      </div>
      {isModalOpen && (
        <div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute top-0 left-0 w-full h-screen bg-black/40"
          ></div>
          <section className="fixed left-[50%] translate-x-[-50%] min-w-[400px] mx-auto bg-white rounded-md px-5 py-2 z-10">
            <div className="flex justify-between mb-5">
              <h2 className="cursor-default">Add New Transaction</h2>
              <button onClick={() => setIsModalOpen(false)}>X</button>
            </div>
            <form onSubmit={handleSubmit} method="POST">
              <label htmlFor="description">Enter Description</label>
              <input
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                id="description"
                className="w-full border mb-3 block border-black/40 rounded-md py-1 px-3 focus:outline-blue-700"
              />
              <div className="mb-4">
                <label htmlFor="amount">Enter Amount</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required={true}
                  type="number"
                  name="amount"
                  id="amount"
                  className="w-full border block border-black/40 rounded-md py-1 px-3 focus:outline-blue-700 mb-3"
                />

                <input
                  checked={transactionType === "income"}
                  onChange={(e) => onRadioChange(e)}
                  required={true}
                  className="mr-1"
                  type="radio"
                  value="income"
                  name="transaction"
                  id="income"
                />
                <label htmlFor="income" className="mr-7">
                  Income
                </label>

                <input
                  checked={transactionType === "expense"}
                  onChange={(e) => onRadioChange(e)}
                  required={true}
                  className="mr-1"
                  type="radio"
                  value="expense"
                  name="transaction"
                  id="expense"
                />
                <label htmlFor="expense">Expense</label>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-400 rounded-md text-white hover:bg-blue-600 transition-all"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-2 bg-black/10 rounded-md hover:bg-black/20 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Navbar;
