import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/dashboard.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
} from '@mui/material';

interface ChartData {
  label: string;
  value: number;
}

const Reports: React.FC = () => {
  const location = useLocation();
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (location.state?.chartData) {
      // If chartData is passed, use it
      setChartData(location.state.chartData);
    } else {
      // Default data if no chart data is passed
      setChartData([
        { label: 'Default Data', value: 100 },
        { label: 'Sample Data', value: 80 },
      ]);
    }
  }, [location.state]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="page-container" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Report Details
      </Typography>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData &&
                chartData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data: ChartData, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{data.label}</TableCell>
                    <TableCell>{data.value}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={chartData?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Reports;
