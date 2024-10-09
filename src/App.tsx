import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ListView from './pages/ListView';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import DarkModeToggle from './components/DarkModeToggle';
import './styles/dashboard.scss';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to dynamically set the header title based on the current route
  const useHeaderTitle = () => {
    const location = useLocation();
    switch (location.pathname) {
      case '/dashboard':
        return 'Compliance Dashboard';
      case '/list-view':
        return 'List View';
      case '/reports':
        return 'Reports';
      case '/settings':
        return 'Settings';
      default:
        return 'Compliance Dashboard';
    }
  };

  return (
    <Router>
      <div className={`dashboard-container ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ display: 'flex' }}>
        <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <div className="dashboard-content" style={{ flexGrow: 1 }}>
          <Header /> {/* Pass the dynamic title to the Header */}
          <div style={{ textAlign: 'right', padding: '10px' }}>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list-view" element={<ListView />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
