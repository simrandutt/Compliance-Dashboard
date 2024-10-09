
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/sidebar.scss';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void; // Prop for toggling sidebar collapse
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} style={{ width: collapsed ? '60px' : '250px', transition: 'width 0.3s ease-in-out' }}>
      {/* Toggle Button for Collapsing/Expanding the Sidebar */}
      <IconButton onClick={toggleSidebar} className="sidebar-toggle">
        <MenuIcon />
      </IconButton>

      <List component="nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Dashboard" />} {/* Conditionally render text */}
          </ListItemButton>
        </NavLink>

        <NavLink to="/list-view" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="List View" />} {/* Conditionally render text */}
          </ListItemButton>
        </NavLink>
      </List>

      <Divider />

      <List component="nav">
        <NavLink to="/reports" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Reports" />} {/* Conditionally render text */}
          </ListItemButton>
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Settings" />} {/* Conditionally render text */}
          </ListItemButton>
        </NavLink>
      </List>
    </div>
  );
};

export default Sidebar;
