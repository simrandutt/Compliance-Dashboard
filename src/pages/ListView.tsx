import React from 'react';
import '../styles/dashboard.scss';
import { List, ListItem, ListItemText, Checkbox, Divider } from '@mui/material';

const ListView: React.FC = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const items = [
    'Item 1 - Compliance Report',
    'Item 2 - Work Orders',
    'Item 3 - Tasks',
    'Item 4 - Alerts',
  ];

  return (
    <div className="page-container">
      <h2>List View</h2>
      <List>
        {items.map((item, index) => (
          <div key={index}>
            <ListItem 
              component="div"
              onClick={handleToggle(index)}
            >
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={item} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default ListView;
