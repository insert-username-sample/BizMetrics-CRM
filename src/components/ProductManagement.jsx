import React from 'react';

    function ProductManagement() {
      return (
        <div>
          <div className="search-bar">
            <input type="text" placeholder="Search Products..." />
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>₹100</td>
                  <td>In Stock</td>
                  <td>
                    <button className="add-button">Edit</button>
                    <button className="add-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>₹200</td>
                  <td>Out of Stock</td>
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

    export default ProductManagement;
