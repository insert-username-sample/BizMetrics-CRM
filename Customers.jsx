import React from 'react';

    function Customers() {
      return (
        <div>
          <div className="search-bar">
            <input type="text" placeholder="Search Customers..." />
          </div>
          <button className="add-button">Add Customer</button>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aarav Patel</td>
                  <td>aarav.patel@example.com</td>
                  <td>91-9876543210</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Priya Sharma</td>
                  <td>priya.sharma@example.com</td>
                  <td>91-8765432109</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Rohan Singh</td>
                  <td>rohan.singh@example.com</td>
                  <td>91-7654321098</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
                 <tr>
                  <td>Anika Verma</td>
                  <td>anika.verma@example.com</td>
                  <td>91-6543210987</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default Customers;
