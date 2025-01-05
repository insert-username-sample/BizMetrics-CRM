import React from 'react';

    function Settings() {
      return (
        <div>
          <div className="settings-section">
            <h2>Profile</h2>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
            <label>Password</label>
            <input type="password" placeholder="Your Password" />
            <button>Update Profile</button>
          </div>
          <div className="settings-section">
            <h2>Notification Settings</h2>
            <label>
              <input type="checkbox" /> Enable Notifications
            </label>
          </div>
          <div className="settings-section">
            <h2>Analytics Settings</h2>
            <label>
              <input type="checkbox" /> Show Sales Metrics
            </label>
            <label>
              <input type="checkbox" /> Show Customer Metrics
            </label>
          </div>
        </div>
      );
    }

    export default Settings;
