import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SummaryCard from "./components/SummaryCard";
import { transactions } from "./data/transactions";
import TransactionTable from "./components/TransactionTable";
import Charts from "./components/Charts";
import Insights from "./components/Insights";

function App() {
  // 🔍 State
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // 👤 Role state
  const [role, setRole] = useState("viewer");

  // Calculate income
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // Calculate expense
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // Calculate balance
  const balance = income - expense;

  // 🔍 Filter logic
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ display: "flex", background: "#f9fafb" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar role={role} setRole={setRole} />

        <div style={{ padding: "25px" }}>
          {/* Cards */}
          <div
            id="dashboard"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <SummaryCard title="Total Balance" amount={balance} />
            <SummaryCard title="Income" amount={income} />
            <SummaryCard title="Expense" amount={expense} />
          </div>

          {/* Admin Button */}
          {role === "admin" && (
            <button
              style={{
                marginTop: "25px",
                padding: "10px 16px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Add Transaction
            </button>
          )}

          {/* Charts */}
          <div
            id="charts"
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Charts data={transactions} />
          </div>

          {/* Insights */}
          <div id="insights" style={{ marginTop: "50px" }}>
            <Insights data={transactions} />
          </div>

          {/* Search + Filter */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                width: "200px",
              }}
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
              }}
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Table */}
          <div id="transactions" style={{ marginTop: "20px" }}>
            <TransactionTable data={filteredTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;