import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField } from '@mui/material';

const ComplianceWorkOrders: React.FC<{ workOrders: any[] }> = ({ workOrders }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  if (!workOrders || workOrders.length === 0) {
    return <div>No work orders available</div>;
  }

  // Handlers for pagination and filtering
  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
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
    <Paper style={{ marginTop: '20px' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search Work Orders"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ borderRadius: '4px', margin: '10px 0', padding: '0', width: '200px' }}
        InputProps={{ style: { padding: '5px 10px', height: '35px', marginLeft: '7px' } }}
        inputProps={{ style: { textAlign: 'center' } }}
      />

      <TableContainer>
        <Table aria-label="work orders table">
          <TableHead>
            <TableRow>
              <TableCell>Work Order</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Completion Date</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredWorkOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.dueDate}</TableCell>
                <TableCell>{order.completionDate}</TableCell>
                <TableCell>{order.priority}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.assignedTo}</TableCell>
                <TableCell>{order.description}</TableCell>
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
