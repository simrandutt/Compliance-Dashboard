import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MetricsCardProps {
  title: string;
  value: string | number;
  color: 'primary' | 'secondary' | 'success';
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, color }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: `${color}.main` }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
