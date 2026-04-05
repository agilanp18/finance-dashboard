function SummaryCard({ title, amount }) {
  // Decide color based on title
  let amountColor = "#000000";

  if (title.toLowerCase().includes("income")) {
    amountColor = "#16a34a"; // green
  } else if (title.toLowerCase().includes("expense")) {
    amountColor = "#dc2626"; // red
  } else if (title.toLowerCase().includes("balance")) {
    amountColor = "#2563eb"; // blue
  }

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        width: "240px",
        textAlign: "center",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
    >
      {/* Title */}
      <h4
        style={{
          color: "#374151", // darker gray
          marginBottom: "14px",
          fontSize: "12px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
      >
        {title}
      </h4>

      {/* Amount */}
      <h2
        style={{
          color: amountColor, // dynamic color
          fontWeight: "700",
          fontSize: "28px",
        }}
      >
        ₹{amount.toLocaleString()}
      </h2>
    </div>
  );
}

export default SummaryCard;