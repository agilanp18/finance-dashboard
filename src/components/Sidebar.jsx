function Sidebar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
        borderRight: "1px solid #1f2937",
      }}
    >
      {/* Branding */}
      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#3b82f6",
            letterSpacing: "0.5px",
          }}
        >
          Finance
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginTop: "4px",
          }}
        >
          Dashboard Panel
        </p>
      </div>

      {/* Menu */}
      <div
        style={itemStyle}
        onClick={() => scrollToSection("dashboard")}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#374151")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        Dashboard
      </div>

      <div
        style={itemStyle}
        onClick={() => scrollToSection("charts")}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#374151")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        Charts
      </div>

      <div
        style={itemStyle}
        onClick={() => scrollToSection("insights")}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#374151")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        Insights
      </div>

      <div
        style={itemStyle}
        onClick={() => scrollToSection("transactions")}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#374151")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        Transactions
      </div>
    </div>
  );
}

const itemStyle = {
  padding: "12px",
  marginBottom: "12px",
  cursor: "pointer",
  borderRadius: "6px",
  transition: "0.2s",
  fontWeight: "500",
  fontSize: "14px",
};

export default Sidebar;