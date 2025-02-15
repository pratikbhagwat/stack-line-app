export default function SalesTable({ sales }) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
        <tr>
          {["Week Ending", "Retail Sales", "Wholesale Sales", "Units Sold", "Retailer Margin"].map((header) => (
            <th key={header} className="border border-gray-300 p-2 text-left">
              {header}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {sales.map((entry, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2">{entry.weekEnding}</td>
            <td className="border border-gray-300 p-2">${entry.retailSales.toLocaleString()}</td>
            <td className="border border-gray-300 p-2">${entry.wholesaleSales.toLocaleString()}</td>
            <td className="border border-gray-300 p-2">{entry.unitsSold}</td>
            <td className="border border-gray-300 p-2">${entry.retailerMargin.toLocaleString()}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}