import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from "@mui/material";

export default function MUISalesTable({ sales }) {
  const [order, setOrder] = useState("asc"); // Sorting order: 'asc' or 'desc'
  const [orderBy, setOrderBy] = useState("weekEnding"); // Column to sort by

  // Columns configuration
  const columns = [
    { id: "weekEnding", label: "Week Ending" },
    { id: "retailSales", label: "Retail Sales" },
    { id: "wholesaleSales", label: "Wholesale Sales" },
    { id: "unitsSold", label: "Units Sold" },
    { id: "retailerMargin", label: "Retailer Margin" },
  ];

  // Sorting logic
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedSales = [...sales].sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (order === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedSales.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.weekEnding}</TableCell>
              <TableCell>${row.retailSales.toLocaleString()}</TableCell>
              <TableCell>${row.wholesaleSales.toLocaleString()}</TableCell>
              <TableCell>{row.unitsSold}</TableCell>
              <TableCell>${row.retailerMargin.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}