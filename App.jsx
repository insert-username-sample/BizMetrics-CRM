import React from 'react';
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link,
      useLocation,
    } from 'react-router-dom';
    import {
      FaTh,
      FaList,
      FaShoppingCart,
      FaUsers,
      FaUserTie,
      FaFile,
      FaChartBar,
      FaCog,
    } from 'react-icons/fa';
    import Dashboard from './components/Dashboard';
    import ProductManagement from './components/ProductManagement';
    import Orders from './components/Orders';
    import Customers from './components/Customers';
    import Sellers from './components/Sellers';
    import FileManager from './components/FileManager';
    import Reports from './components/Reports';
    import Settings from './components/Settings';
    import logo from './assets/bizmetrics-logo.png';

    function App() {
      return (
        <Router>
          <div className="app-container">
            <Header />
            <TopNav />
            <div className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<ProductManagement />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/sellers" element={<Sellers />} />
                <Route path="/files" element={<FileManager />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </Router>
      );
    }

    function Header() {
      return (
        <header className="header">
          <img src={logo} alt="BizMetrics CRM Logo" style={{ height: '50px' }} />
          <div className="user-profile">
            <button>
              User <span role="img" aria-label="dropdown">▼</span>
            </button>
          </div>
        </header>
      );
    }

    function TopNav() {
      const location = useLocation();
      return (
        <nav className="top-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                <FaTh /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={location.pathname === '/products' ? 'active' : ''}
              >
                <FaList /> Products
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={location.pathname === '/orders' ? 'active' : ''}
              >
                <FaShoppingCart /> Orders
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className={location.pathname === '/customers' ? 'active' : ''}
              >
                <FaUsers /> Customers
              </Link>
            </li>
            <li>
              <Link
                to="/sellers"
                className={location.pathname === '/sellers' ? 'active' : ''}
              >
                <FaUserTie /> Sellers
              </Link>
            </li>
            <li>
              <Link
                to="/files"
                className={location.pathname === '/files' ? 'active' : ''}
              >
                <FaFile /> File Manager
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className={location.pathname === '/reports' ? 'active' : ''}
              >
                <FaChartBar /> Reports
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={location.pathname === '/settings' ? 'active' : ''}
              >
                <FaCog /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      );
    }

    export default App;
