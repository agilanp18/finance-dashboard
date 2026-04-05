function Insights({ data, theme }) {
  let income = 0;
  let expense = 0;

  const categoryTotals = {};

  data.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;

      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "None";
  let max = 0;

  for (let cat in categoryTotals) {
    if (categoryTotals[cat] > max) {
      max = categoryTotals[cat];
      topCategory = cat;
    }
  }

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "15px",
          color: theme === "light" ? "#111827" : "#f9fafb",
        }}
      >
        Insights
      </h2>

      <div
        style={{
          background: theme === "light" ? "white" : "#1f2937",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: "600",
            color: theme === "light" ? "#374151" : "#e5e7eb",
          }}
        >
          Top Spending Category: {topCategory}
        </p>

        <p
          style={{
            fontWeight: "600",
            color: theme === "light" ? "#374151" : "#e5e7eb",
          }}
        >
          Total Income: ₹{income.toLocaleString()}
        </p>

        <p
          style={{
            fontWeight: "600",
            color: theme === "light" ? "#374151" : "#e5e7eb",
          }}
        >
          Total Expense: ₹{expense.toLocaleString()}
        </p>

        <p
          style={{
            marginTop: "10px",
            fontWeight: "700",
            color: income > expense ? "#16a34a" : "#dc2626",
          }}
        >
          {income > expense
            ? "You are saving money"
            : "Your expenses are higher"}
        </p>
      </div>
    </div>
  );
}

export default Insights;
