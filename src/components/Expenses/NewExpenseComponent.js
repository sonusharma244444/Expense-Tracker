import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

import "./NewExpenseComponent.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFiter";

function NewExpenseComponent(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangedFilter={filterChangedHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default NewExpenseComponent;
