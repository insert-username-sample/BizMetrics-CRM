import React from 'react';

    const ordersData = [
      {
        id: 1,
        customerName: 'Aarav Patel',
        date: '2023-01-01',
        status: 'Pending',
      },
      {
        id: 2,
        customerName: 'Priya Sharma',
        date: '2023-01-02',
        status: 'Shipped',
      },
      {
        id: 3,
        customerName: 'Rohan Singh',
        date: '2023-01-05',
        status: 'Delivered',
      },
      {
        id: 4,
        customerName: 'Anika Verma',
        date: '2023-01-07',
        status: 'Pending',
      },
    ];

    function Orders() {
      return (
        <div>
          <div className="search-bar">
            <input type="text" placeholder="Search by Date or Status" />
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                    <td>
                      <button className="add-button">Update Status</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default Orders;
