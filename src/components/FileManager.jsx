import React from 'react';

    function FileManager() {
      return (
        <div>
          <div className="search-bar">
            <input type="text" placeholder="Search Files..." />
          </div>
          <button className="add-button">Upload File</button>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Upload Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>File 1.pdf</td>
                  <td>2023-01-01</td>
                  <td>
                    <button className="add-button">Delete</button>
                    <button className="add-button">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>File 2.docx</td>
                  <td>2023-01-02</td>
                  <td>
                    <button className="add-button">Delete</button>
                    <button className="add-button">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default FileManager;
