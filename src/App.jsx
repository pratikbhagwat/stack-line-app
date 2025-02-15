import React from "react";
import ProductInfo from "./components/ProductInfo";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import salesData from "./data/salesData.json";
import "./styles/App.css";
import logo from "./assets/logo.svg"; // Import the logo

export default function App() {
  const product = salesData[0];

  return (
    <div className="app-container">
      {/* Top Bar */}
      <header className="top-bar">
        <img src={logo} alt="Stackline Logo" className="logo" />
      </header>

      {/* Main Layout */}
      <div className="content-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <ProductInfo product={product} />
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="chart-section">
            <SalesChart sales={product.sales} />
          </div>
          <div className="table-section">
            <SalesTable sales={product.sales} />
          </div>
        </main>
      </div>
    </div>
  );
}