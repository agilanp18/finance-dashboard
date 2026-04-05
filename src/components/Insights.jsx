function Insights({ data }) {
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

  // Find highest spending category
  let topCategory = "None";
  let max = 0;

  for (let cat in categoryTotals) {
    if (categoryTotals[cat] > max) {
      max = categoryTotals[cat];
      topCategory = cat;
    }
  }

  return (
    <div style={{ marginTop: "50px" }}>
      {/* Title */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#111827",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Insights
      </h2>

      {/* Card */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p style={{ fontWeight: "600", color: "#374151" }}>
          Top Spending Category: {topCategory}
        </p>

        <p style={{ fontWeight: "600", color: "#374151" }}>
          Total Income: ₹{income.toLocaleString()}
        </p>

        <p style={{ fontWeight: "600", color: "#374151" }}>
          Total Expense: ₹{expense.toLocaleString()}
        </p>

        <p
          style={{
            marginTop: "12px",
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