import React, { useState } from 'react';
    import './Reports.css';

    function Reports() {
      const [reportType, setReportType] = useState('sales');
      const [timeFrame, setTimeFrame] = useState('lastMonth');
      const [reportData, setReportData] = useState(null);

      const handleGenerateReport = () => {
        let data = [];
        if (reportType === 'sales') {
          data = [
            {
              date: '2023-01-01',
              product: 'Product A',
              quantity: 10,
              revenue: 1000,
              cost: 500,
              profit: 500,
              customer: 'Aarav Patel',
              region: 'North',
            },
            {
              date: '2023-01-02',
              product: 'Service B',
              quantity: 1,
              revenue: 2000,
              cost: 1000,
              profit: 1000,
              customer: 'Priya Sharma',
              region: 'South',
            },
            {
              date: '2023-01-03',
              product: 'Product A',
              quantity: 5,
              revenue: 500,
              cost: 250,
              profit: 250,
              customer: 'Rohan Singh',
              region: 'East',
            },
            {
              date: '2023-01-04',
              product: 'Service C',
              quantity: 2,
              revenue: 3000,
              cost: 1500,
              profit: 1500,
              customer: 'Anika Verma',
              region: 'West',
            },
          ];
        } else if (reportType === 'customer') {
          data = [
            {
              customerName: 'Aarav Patel',
              email: 'aarav.patel@example.com',
              phone: '91-9876543210',
              totalOrders: 5,
              totalSpend: 5000,
              averageOrderValue: 1000,
              firstOrderDate: '2023-01-01',
              lastOrderDate: '2023-01-05',
            },
            {
              customerName: 'Priya Sharma',
              email: 'priya.sharma@example.com',
              phone: '91-8765432109',
              totalOrders: 3,
              totalSpend: 3000,
              averageOrderValue: 1000,
              firstOrderDate: '2023-01-02',
              lastOrderDate: '2023-01-07',
            },
            {
              customerName: 'Rohan Singh',
              email: 'rohan.singh@example.com',
              phone: '91-7654321098',
              totalOrders: 2,
              totalSpend: 2000,
              averageOrderValue: 1000,
              firstOrderDate: '2023-01-03',
              lastOrderDate: '2023-01-06',
            },
            {
              customerName: 'Anika Verma',
              email: 'anika.verma@example.com',
              phone: '91-6543210987',
              totalOrders: 4,
              totalSpend: 4000,
              averageOrderValue: 1000,
              firstOrderDate: '2023-01-04',
              lastOrderDate: '2023-01-08',
            },
          ];
        } else if (reportType === 'product') {
          data = [
            {
              product: 'Product A',
              totalUnitsSold: 15,
              totalRevenue: 1500,
              averagePrice: 100,
              totalCost: 750,
              totalProfit: 750,
              firstSaleDate: '2023-01-01',
              lastSaleDate: '2023-01-03',
            },
            {
              product: 'Service B',
              totalUnitsSold: 1,
              totalRevenue: 2000,
              averagePrice: 2000,
              totalCost: 1000,
              totalProfit: 1000,
              firstSaleDate: '2023-01-02',
              lastSaleDate: '2023-01-02',
            },
            {
              product: 'Service C',
              totalUnitsSold: 2,
              totalRevenue: 3000,
              averagePrice: 1500,
              totalCost: 1500,
              totalProfit: 1500,
              firstSaleDate: '2023-01-04',
              lastSaleDate: '2023-01-04',
            },
          ];
        }
        setReportData(data);
      };

      const handleExportCSV = () => {
        let csvContent = 'data:text/csv;charset=utf-8,';
        let headers = [];
        let rows = [];

        if (reportType === 'sales') {
          headers = [
            'Date',
            'Product/Service',
            'Quantity',
            'Revenue',
            'Cost',
            'Profit',
            'Customer',
            'Region',
          ];
          rows = reportData.map((item) => [
            item.date,
            item.product,
            item.quantity,
            item.revenue,
            item.cost,
            item.profit,
            item.customer,
            item.region,
          ]);
        } else if (reportType === 'customer') {
          headers = [
            'Customer Name',
            'Email',
            'Phone',
            'Total Orders',
            'Total Spend',
            'Average Order Value',
            'First Order Date',
            'Last Order Date',
          ];
          rows = reportData.map((item) => [
            item.customerName,
            item.email,
            item.phone,
            item.totalOrders,
            item.totalSpend,
            item.averageOrderValue,
            item.firstOrderDate,
            item.lastOrderDate,
          ]);
        } else if (reportType === 'product') {
          headers = [
            'Product/Service',
            'Total Units Sold',
            'Total Revenue',
            'Average Price',
            'Total Cost',
            'Total Profit',
            'First Sale Date',
            'Last Sale Date',
          ];
          rows = reportData.map((item) => [
            item.product,
            item.totalUnitsSold,
            item.totalRevenue,
            item.averagePrice,
            item.totalCost,
            item.totalProfit,
            item.firstSaleDate,
            item.lastSaleDate,
          ]);
        }

        csvContent += headers.join(',') + '\r\n';
        rows.forEach((row) => {
          csvContent += row.join(',') + '\r\n';
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `${reportType}-report.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return (
        <div className="reports-container">
          <div className="filter-options">
            <select
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <option value="lastWeek">Last Week</option>
              <option value="lastMonth">Last Month</option>
              <option value="lastQuarter">Last Quarter</option>
              <option value="lastYear">Last Year</option>
            </select>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="sales">Sales Report</option>
              <option value="customer">Customer Report</option>
              <option value="product">Product Report</option>
            </select>
          </div>
          <button className="add-button" onClick={handleGenerateReport}>
            Generate Report
          </button>
          {reportData && (
            <button className="add-button" onClick={handleExportCSV}>
              Export CSV
            </button>
          )}
          {reportData && (
            <div className="report-table-container">
              {reportType === 'sales' && (
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Product/Service</th>
                      <th>Quantity</th>
                      <th>Revenue</th>
                      <th>Cost</th>
                      <th>Profit</th>
                      <th>Customer</th>
                      <th>Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.product}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.revenue}</td>
                        <td>₹{item.cost}</td>
                        <td>₹{item.profit}</td>
                        <td>{item.customer}</td>
                        <td>{item.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {reportType === 'customer' && (
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Total Orders</th>
                      <th>Total Spend</th>
                      <th>Average Order Value</th>
                      <th>First Order Date</th>
                      <th>Last Order Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.customerName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.totalOrders}</td>
                        <td>₹{item.totalSpend}</td>
                        <td>₹{item.averageOrderValue}</td>
                        <td>{item.firstOrderDate}</td>
                        <td>{item.lastOrderDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {reportType === 'product' && (
                <table>
                  <thead>
                    <tr>
                      <th>Product/Service</th>
                      <th>Total Units Sold</th>
                      <th>Total Revenue</th>
                      <th>Average Price</th>
                      <th>Total Cost</th>
                      <th>Total Profit</th>
                      <th>First Sale Date</th>
                      <th>Last Sale Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.totalUnitsSold}</td>
                        <td>₹{item.totalRevenue}</td>
                        <td>₹{item.averagePrice}</td>
                        <td>₹{item.totalCost}</td>
                        <td>₹{item.totalProfit}</td>
                        <td>{item.firstSaleDate}</td>
                        <td>{item.lastSaleDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      );
    }

    export default Reports;
