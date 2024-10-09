import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
const ComplianceWorkOrders: React.FC<{ workOrders: any[] }> = ({ workOrders }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (!workOrders || workOrders.length === 0) {
    return <div>No work orders available</div>;
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
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
            {workOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
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
        count={workOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ComplianceWorkOrders;
