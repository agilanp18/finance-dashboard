import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Charts({ data }) {
  // Line chart data
  const lineData = data.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  // Pie chart (expense by category)
  const categoryData = {};

  data.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
      
      {/* Line Chart */}
      <div>
        <h3>Transaction Trend</h3>
        <LineChart width={400} height={250} data={lineData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#2563eb" />
        </LineChart>
      </div>

      {/* Pie Chart */}
      <div>
        <h3>Expense Breakdown</h3>
        <PieChart width={300} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Charts;