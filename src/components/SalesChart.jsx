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

// Import the utility function
const aggregateSalesByMonth = (sales) => {
  const monthlyData = {};

  sales.forEach((entry) => {
    const month = new Date(entry.weekEnding).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = {
        retailSales: 0,
        wholesaleSales: 0,
        count: 0,
      };
    }

    monthlyData[month].retailSales += entry.retailSales;
    monthlyData[month].wholesaleSales += entry.wholesaleSales;
    monthlyData[month].count += 1;
  });

  return Object.keys(monthlyData).map((month) => ({
    month,
    retailSales: monthlyData[month].retailSales / monthlyData[month].count,
    wholesaleSales: monthlyData[month].wholesaleSales / monthlyData[month].count,
  }));
};

export default function SalesChart({ sales }) {
  const monthlySales = aggregateSalesByMonth(sales);

  return (
    <div className="chart-container">
      <h3 className="chart-title">Retail Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlySales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            interval={0} // Ensure all months are displayed
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#8884d8"
            strokeWidth={3}
            dot={true}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}