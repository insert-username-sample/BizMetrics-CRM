import React, { useState } from 'react';
    import { Chart } from 'chart.js/auto';
    import { useEffect, useRef } from 'react';

    function Dashboard() {
      const [target, setTarget] = useState(1000);
      const [orders, setOrders] = useState(500);
      const [customers, setCustomers] = useState(200);
      const [leads, setLeads] = useState(150);

      const [editTarget, setEditTarget] = useState(false);
      const [editOrders, setEditOrders] = useState(false);
      const [editCustomers, setEditCustomers] = useState(false);
      const [editLeads, setEditLeads] = useState(false);

      const salesChartRef = useRef(null);
      const customerChartRef = useRef(null);
      const orderStatusChartRef = useRef(null);
      const leadsChartRef = useRef(null);

      useEffect(() => {
        const salesChartCanvas = salesChartRef.current.getContext('2d');
        const customerChartCanvas = customerChartRef.current.getContext('2d');
        const orderStatusChartCanvas = orderStatusChartRef.current.getContext('2d');
        const leadsChartCanvas = leadsChartRef.current.getContext('2d');

        const salesChart = new Chart(salesChartCanvas, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Sales',
                data: [12000, 15000, 18000, 20000, 22000, 25000],
                borderColor: '#3498db',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
              },
            },
          },
        });

        const customerChart = new Chart(customerChartCanvas, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Customers',
                data: [50, 60, 75, 80, 90, 100],
                backgroundColor: '#2ecc71',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        const orderStatusChart = new Chart(orderStatusChartCanvas, {
          type: 'pie',
          data: {
            labels: ['Pending', 'Shipped', 'Delivered'],
            datasets: [
              {
                label: 'Order Status',
                data: [30, 50, 20],
                backgroundColor: ['#f39c12', '#3498db', '#2ecc71'],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
          },
        });

        const leadsChart = new Chart(leadsChartCanvas, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Leads',
                data: [20, 30, 40, 50, 60, 70],
                borderColor: '#e74c3c',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
              },
            },
          },
        });

        return () => {
          salesChart.destroy();
          customerChart.destroy();
          orderStatusChart.destroy();
          leadsChart.destroy();
        };
      }, []);

      const handleSave = (setter, value, setEdit) => {
        setter(value);
        setEdit(false);
      };

      return (
        <div>
          <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div className="card" style={{ width: '20%', marginBottom: '0' }}>
              <h3>Your Target</h3>
              {editTarget ? (
                <>
                  <input
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleSave(setTarget, target, setEditTarget)}>Save</button>
                </>
              ) : (
                <>
                  <p>₹{target}</p>
                  <button onClick={() => setEditTarget(true)}>Edit</button>
                </>
              )}
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '0' }}>
              <h3>Orders</h3>
              {editOrders ? (
                <>
                  <input
                    type="number"
                    value={orders}
                    onChange={(e) => setOrders(parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleSave(setOrders, orders, setEditOrders)}>Save</button>
                </>
              ) : (
                <>
                  <p>₹{orders}</p>
                  <button onClick={() => setEditOrders(true)}>Edit</button>
                </>
              )}
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '0' }}>
              <h3>Customers</h3>
              {editCustomers ? (
                <>
                  <input
                    type="number"
                    value={customers}
                    onChange={(e) => setCustomers(parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleSave(setCustomers, customers, setEditCustomers)}>Save</button>
                </>
              ) : (
                <>
                  <p>{customers}</p>
                  <button onClick={() => setEditCustomers(true)}>Edit</button>
                </>
              )}
            </div>
             <div className="card" style={{ width: '20%', marginBottom: '0' }}>
              <h3>Leads</h3>
              {editLeads ? (
                <>
                  <input
                    type="number"
                    value={leads}
                    onChange={(e) => setLeads(parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleSave(setLeads, leads, setEditLeads)}>Save</button>
                </>
              ) : (
                <>
                  <p>{leads}</p>
                  <button onClick={() => setEditLeads(true)}>Edit</button>
                </>
              )}
            </div>
          </div>
          <div className="graph-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
              <div className="graph" style={{ height: '300px', width: '48%', marginRight: '10px' }}>
                <h3>Sales</h3>
                <canvas ref={salesChartRef}></canvas>
              </div>
              <div className="graph" style={{ height: '300px', width: '48%', marginLeft: '10px' }}>
                <h3>Customer Growth</h3>
                <canvas ref={customerChartRef}></canvas>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="graph" style={{ height: '300px', width: '48%', marginRight: '10px' }}>
                <h3>Leads</h3>
                <canvas ref={leadsChartRef}></canvas>
              </div>
              <div className="graph" style={{ height: '300px', width: '48%', marginLeft: '10px' }}>
                <h3>Order Status</h3>
                <canvas ref={orderStatusChartRef}></canvas>
              </div>
            </div>
          </div>
          <button className="quick-action-button">Add Product</button>
          <div className="date-range-selector">
            <select>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
        </div>
      );
    }

    export default Dashboard;
