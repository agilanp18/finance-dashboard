import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SummaryCard from "./components/SummaryCard";
import { transactions } from "./data/transactions";
import TransactionTable from "./components/TransactionTable";
import Charts from "./components/Charts";
import Insights from "./components/Insights";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [role, setRole] = useState("viewer");
  const [theme, setTheme] = useState("light");

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div
      style={{
        display: "flex",
        background: theme === "light" ? "#f9fafb" : "#111827",
      }}
    >
      <Sidebar />

      {/* ✅ MAIN CONTENT FIX */}
      <div
        style={{
          marginLeft: "70px", // must match sidebar width
          width: "100%", // 🔥 FIX FOR GAP
          minHeight: "100vh",
        }}
      >
        <Navbar
          role={role}
          setRole={setRole}
          theme={theme}
          setTheme={setTheme}
        />

        <div style={{ padding: "25px" }}>
          {/* Cards */}
          <div
            id="dashboard"
            style={{
              display: "flex",
              gap: "20px",
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
              }}
            >
              Add Transaction
            </button>
          )}

          {/* ✅ CHARTS FIX */}
          <div
            id="charts"
            style={{
              marginTop: "50px",
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            <Charts data={transactions} />
          </div>

          {/* Insights */}
          <div id="insights" style={{ marginTop: "50px" }}>
            <Insights data={transactions} theme={theme} />
          </div>

          {/* Search + Filter */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "12px",
            }}
          >
            <input
              type="text"
              placeholder="Search category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Table */}
          <div id="transactions" style={{ marginTop: "30px" }}>
            <TransactionTable data={filteredTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
