import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SalesChart({ sales }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}