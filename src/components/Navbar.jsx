function Navbar({ role, setRole }) {
  return (
    <div
      style={{
        height: "60px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#111827",
          letterSpacing: "0.3px",
        }}
      >
        Finance Dashboard
      </h1>

      {/* Role Selector */}
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
            color: "#6b7280",
            fontWeight: "500",
          }}
        >
          Role:
        </span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            background: "#ffffff",
            color: "#111827",
            fontWeight: "600",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;