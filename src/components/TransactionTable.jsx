function TransactionTable({ data }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2
        style={{
          marginBottom: "14px",
          color: "#111827",
          fontWeight: "700",
        }}
      >
        Transactions
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        }}
      >
        <thead style={{ background: "#f3f4f6" }}>
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Amount (₹)</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Type</th>
          </tr>
        </thead>

        <tbody>
          {data.map((t) => (
            <tr
              key={t.id}
              style={{
                textAlign: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#ffffff")
              }
            >
              {/* Date */}
              <td style={{ ...tdStyle, color: "#1f2937", fontWeight: "500" }}>
                {new Date(t.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              {/* Amount */}
              <td
                style={{
                  ...tdStyle,
                  fontWeight: "700",
                  color: t.type === "income" ? "#16a34a" : "#dc2626",
                }}
              >
                ₹{t.amount.toLocaleString()}
              </td>

              {/* Category */}
              <td
                style={{
                  ...tdStyle,
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                {t.category}
              </td>

              {/* Type */}
              <td
                style={{
                  ...tdStyle,
                  fontWeight: "700",
                  color: t.type === "income" ? "#16a34a" : "#dc2626",
                }}
              >
                {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Header style
const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.7px",
  color: "#374151",
  fontWeight: "700",
};

// Cell style
const tdStyle = {
  padding: "14px",
  borderBottom: "1px solid #eee",
};

export default TransactionTable;