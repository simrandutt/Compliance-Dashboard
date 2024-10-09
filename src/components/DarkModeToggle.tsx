import React from 'react';
import { Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      {darkMode ? <Brightness4 style={{ color: '#fff', marginRight: '8px' }} /> : <Brightness7 style={{ color: '#000', marginRight: '8px' }} />}
      Theme
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
