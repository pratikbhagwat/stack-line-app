import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart({ sales }) {
  // Helper function to format the x-axis ticks to months
  const formatToMonth = (date) => {
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
    ];
    const monthIndex = new Date(date).getMonth();
    return months[monthIndex];
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Retail Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="weekEnding"
            tick={{ fontSize: 12 }}
            tickFormatter={formatToMonth} // Use custom formatter for months
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}