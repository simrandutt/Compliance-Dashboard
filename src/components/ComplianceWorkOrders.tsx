import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField } from '@mui/material';

const ComplianceWorkOrders: React.FC<{ workOrders: any[] }> = ({ workOrders }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState(''); // State for filtering

  if (!workOrders || workOrders.length === 0) {
    return <div>No work orders available</div>;
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset to the first page after search
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Filter work orders based on search term
  const filteredWorkOrders = workOrders.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={{ marginTop: '20px'}}>
      {/* Add a TextField for filtering */}
      <TextField
          variant="outlined"
          size="small"
          placeholder="Search Work Orders"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            borderRadius: '4px',
            margin: '10px 0',
            padding: '0',
            width: '200px',
          }}
          InputProps={{
            style: { padding: '5px 10px', height: '35px',marginLeft: '7px' }, // Add padding and height adjustments
          }}
          inputProps={{
            style: { textAlign: 'center' }, // Center the placeholder text
          }}
        />

      <TableContainer>
        <Table aria-label="work orders table">
          <TableHead>
            <TableRow>
              <TableCell>Work Order</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Completion Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredWorkOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.dueDate}</TableCell>
                <TableCell>{order.completionDate}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={filteredWorkOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ComplianceWorkOrders;
