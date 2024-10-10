import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Modal, Button, Tooltip } from '@mui/material';
import { FiCheckCircle, FiAlertCircle, FiActivity, FiAlertTriangle } from 'react-icons/fi';
import '../styles/board.scss';

const ComplianceBoards: React.FC = () => {
  const [complianceData, setComplianceData] = useState<any>(null); // Store fetched data
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5001/api/compliance')
      .then(response => response.json())
      .then(data => setComplianceData(data))
      .catch(error => console.error('Error fetching compliance data:', error));
  }, []);

  const handleOpen = (content: string) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (!complianceData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: '20px', minHeight: '250px', maxWidth: '1200px', marginLeft: '40px' }}>
      <Box display="flex" justifyContent="space-between" gap={3}>
        {/* Certification Status Tile */}
        <Card
          elevation={3}
          className="board board-success"
          sx={{
            borderRadius: '16px',
            padding: '24px',
            background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: 'auto',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2} color="#1976d2">
              Certification Status
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Tooltip title="Total active certifications" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Active</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.controlsImplemented} Certifications</Typography>
                  </Box>
                </Box>
              </Tooltip>
              <Tooltip title="Upcoming certifications" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertCircle size={28} style={{ color: 'orange' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Upcoming</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.pendingTasks} Certifications</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Tooltip title="Audits completed successfully" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiActivity size={28} style={{ color: 'blue' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Audit Completed</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.resolvedIssues} Audits</Typography>
                  </Box>
                </Box>
              </Tooltip>
              <Tooltip title="Critical issues identified during audits" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertTriangle size={28} style={{ color: 'red' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Issues</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.openIssues} Critical Issues</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </CardContent>
          <IconButton
            size="small"
            className="view-details-btn"
            onClick={() => handleOpen('Certification Status Details')}
          >
            View Details
          </IconButton>
        </Card>

        {/* Task Summary Tile */}
        <Card
          elevation={3}
          className="board board-warning"
          sx={{
            borderRadius: '16px',
            padding: '24px',
            background: 'linear-gradient(135deg, #f1f8e9 0%, #ffffff 100%)',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: 'auto',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2} color="#1976d2">
              Task Summary
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Tooltip title="Total completed tasks" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Completed</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.complianceByStatus.completed} Tasks</Typography>
                  </Box>
                </Box>
              </Tooltip>
              <Tooltip title="Pending tasks" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertCircle size={28} style={{ color: 'orange' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Pending</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.complianceByStatus.pending} Tasks</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Tooltip title="Tasks still in progress" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiActivity size={28} style={{ color: 'blue' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">In Progress</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.complianceByStatus.open} Tasks</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </CardContent>
          <IconButton
            size="small"
            className="view-details-btn"
            onClick={() => handleOpen('Task Summary Details')}
          >
            View Details
          </IconButton>
        </Card>

        {/* Upcoming Audits Tile */}
        <Card
          elevation={3}
          className="board board-danger"
          sx={{
            borderRadius: '16px',
            padding: '24px',
            background: 'linear-gradient(135deg, #ffe0b2 0%, #ffffff 100%)',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: 'auto',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2} color="#1976d2">
              Upcoming Audits
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Tooltip title="Scheduled audits" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Scheduled</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.pendingTasks} Audits</Typography>
                  </Box>
                </Box>
              </Tooltip>
              <Tooltip title="Critical audits that are delayed" arrow>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertTriangle size={28} style={{ color: 'red' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Critical</Typography>
                    <Typography variant="body2" color="text.secondary">{complianceData.openIssues} Delayed Audits</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </CardContent>
          <IconButton
            size="small"
            className="view-details-btn"
            onClick={() => handleOpen('Upcoming Audits Details')}
          >
            View Details
          </IconButton>
        </Card>

        {/* Modal for View Details */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              {modalContent}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This is more information about {modalContent}. Add more context and data as needed here.
            </Typography>
            <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
              OK
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ComplianceBoards;
