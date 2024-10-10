import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ListView from './pages/ListView';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import DarkModeToggle from './components/DarkModeToggle';
import InfoBar from './components/InfoBar';
import Login from './pages/Login';
import './styles/dashboard.scss';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<any>(null); // State for the logged-in user

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    setUser(null); // Reset user on logout
  };

  return (
    <Router>
      <div className={`dashboard-container ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ display: 'flex' }}>
        {user ? (
          <>
            <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <div className="dashboard-content" style={{ flexGrow: 1 }}>
              <Header user={user} onLogout={handleLogout} />
              <InfoBar />
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
          </>
        ) : (
          // When the user is not logged in, render the Login page
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
