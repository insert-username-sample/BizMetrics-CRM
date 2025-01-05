import React from 'react';

    function Sellers() {
      return (
        <div>
          <div className="search-bar">
            <input type="text" placeholder="Search Sellers..." />
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Seller Name</th>
                  <th>Performance Metrics</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Seller 1</td>
                  <td>Good</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Seller 2</td>
                  <td>Average</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="floating-button">+</button>
        </div>
      );
    }

    export default Sellers;
