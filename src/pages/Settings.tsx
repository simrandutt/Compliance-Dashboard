import React from 'react';
import '../styles/dashboard.scss';
import { FormControlLabel, Switch, Checkbox, Divider } from '@mui/material';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [checked, setChecked] = React.useState(true);

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  const handleNotificationsToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(event.target.checked);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="page-container">
      <h2>Settings</h2>
      <Divider />
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
        label="Dark Mode"
      />
      <Divider />
      <FormControlLabel
        control={<Switch checked={notifications} onChange={handleNotificationsToggle} />}
        label="Enable Notifications"
      />
      <Divider />
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
        label="Receive Email Reports"
      />
    </div>
  );
};

export default Settings;
