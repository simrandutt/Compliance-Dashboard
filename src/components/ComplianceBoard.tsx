import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Modal, Button } from '@mui/material';
import { FiCheckCircle, FiAlertCircle, FiActivity, FiAlertTriangle } from 'react-icons/fi';
import { Rnd } from 'react-rnd';
import '../styles/board.scss';

const ComplianceBoards: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const handleOpen = (content: string) => {
    setModalContent(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ padding: '20px', minHeight: '250px' ,maxWidth: '1200px', marginLeft: '40px' }}>
      <Box display="flex" justifyContent="space-between" gap={3}>
        {/* Certification Status Board */}
        <Rnd
          default={{
            x: 0, 
            y: 0,
            width: 320,
            height: 250,
          }}
          minWidth={280}
          minHeight={200}
          maxWidth={600}
          maxHeight={400}
          bounds="parent" 
          enableResizing={{
            bottom: true,
            bottomLeft: true,
            bottomRight: true,
            left: true,
            right: true,
            top: true,
            topLeft: true,
            topRight: true,
          }} // Allow resizing
          className="rnd-resize-container resizable-box"
        >
          <Card
            elevation={3}
            sx={{
              borderRadius: '16px',
              padding: '24px',
              height: '100%',
              background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center" mb={2}>
                Certification Status
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Active</Typography>
                    <Typography variant="body2" color="text.secondary">15 Certifications</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertCircle size={28} style={{ color: 'orange' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Upcoming</Typography>
                    <Typography variant="body2" color="text.secondary">5 Certifications</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={2}>
                  <FiActivity size={28} style={{ color: 'blue' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Audit Completed</Typography>
                    <Typography variant="body2" color="text.secondary">10 Audits</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertTriangle size={28} style={{ color: 'red' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Issues</Typography>
                    <Typography variant="body2" color="text.secondary">7 Critical Issues</Typography>
                  </Box>
                </Box>
              </Box>
              <IconButton size="small" sx={{ marginTop: 2, color: '#1976d2' }} onClick={() => handleOpen('Certification Status Details')}>
                View Details
              </IconButton>
            </CardContent>
          </Card>
        </Rnd>

        <Rnd
          default={{
            x: 340, 
            y: 0,
            width: 320,
            height: 250,
          }}
          minWidth={280}
          minHeight={200}
          maxWidth={600}
          maxHeight={400}
          bounds="parent" 
          enableResizing={true} 
        >
          <Card
            elevation={3}
            sx={{
              borderRadius: '16px',
              padding: '24px',
              height: '100%',
              background: 'linear-gradient(135deg, #f1f8e9 0%, #ffffff 100%)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center" mb={2}>
                Task Summary
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Completed</Typography>
                    <Typography variant="body2" color="text.secondary">48 Tasks</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertCircle size={28} style={{ color: 'orange' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Pending</Typography>
                    <Typography variant="body2" color="text.secondary">12 Tasks</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={2}>
                  <FiActivity size={28} style={{ color: 'blue' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">In Progress</Typography>
                    <Typography variant="body2" color="text.secondary">5 Tasks</Typography>
                  </Box>
                </Box>
              </Box>
              <IconButton size="small" sx={{ marginTop: 2, color: '#1976d2' }} onClick={() => handleOpen('Task Summary Details')}>
                View Details
              </IconButton>
            </CardContent>
          </Card>
        </Rnd>

        {/* Upcoming Audits Board */}
        <Rnd
          default={{
            x: 680, // Adjust to avoid overlapping
            y: 0,
            width: 320,
            height: 250,
          }}
          minWidth={280}
          minHeight={200}
          maxWidth={600}
          maxHeight={400}
          bounds="parent" // Restrict movement within parent
          enableResizing={true} // Allow resizing
        >
          <Card
            elevation={3}
            sx={{
              borderRadius: '16px',
              padding: '24px',
              height: '100%',
              background: 'linear-gradient(135deg, #ffe0b2 0%, #ffffff 100%)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center" mb={2}>
                Upcoming Audits
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiCheckCircle size={28} style={{ color: 'green' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Scheduled</Typography>
                    <Typography variant="body2" color="text.secondary">3 Audits</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <FiAlertTriangle size={28} style={{ color: 'red' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Critical</Typography>
                    <Typography variant="body2" color="text.secondary">2 Delayed Audits</Typography>
                  </Box>
                </Box>
              </Box>
              <IconButton size="small" sx={{ marginTop: 2, color: '#1976d2' }} onClick={() => handleOpen('Upcoming Audits Details')}>
                View Details
              </IconButton>
            </CardContent>
          </Card>
        </Rnd>

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
