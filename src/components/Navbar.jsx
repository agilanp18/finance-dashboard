function Navbar({ role, setRole, theme, setTheme }) {
  return (
    <div
      style={{
        height: "60px",
        background: theme === "light" ? "#ffffff" : "#1f2937",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: theme === "light" ? "#111827" : "#f9fafb",
        }}
      >
        Finance Dashboard
      </h1>

      {/* Right section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            color: theme === "light" ? "#6b7280" : "#d1d5db",
          }}
        >
          Role:
        </span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
          }}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* 🌗 Theme Toggle */}
        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background:
              theme === "light" ? "#111827" : "#f9fafb",
            color: theme === "light" ? "white" : "#111827",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
