import React, { useState, useEffect, useCallback } from 'react';
import {
  Box, Card, CardContent, Typography, List, ListItem, ListItemText,
  Chip, Divider, Stack, IconButton, CircularProgress, Alert
} from '@mui/material';
import {
  BugReport as BugReportIcon, CheckCircleOutline as ResolvedIcon,
  MoreHoriz as InProcessIcon, Delete as DeleteIcon, Cancel as RejectedIcon,
} from '@mui/icons-material';

// --- API Base URL (Update to your actual base URL) ---
const API_BASE_URL = 'http://localhost:3000/complaint';

// --- Helper function to render status chip ---
const getStatusChip = (status) => {
  let color;
  let icon;

  switch (status) {
    case 'RESOLVED':
      color = 'success';
      icon = <ResolvedIcon />;
      break;
    case 'IN_PROCESS':
      color = 'info';
      icon = <InProcessIcon />;
      break;
    case 'REJECTED':
      color = 'error';
      icon = <RejectedIcon />;
      break;
    case 'NEW':
    default:
      color = 'warning';
      icon = <BugReportIcon />;
  }

  return (
    <Chip
      // Replace underscores/dashes for cleaner display
      label={status.replace('_', ' ')} 
      color={color}
      icon={icon}
      size="small"
      sx={{ minWidth: '100px' }}
    />
  );
};

const ComplaintStatusList = ({ userName = 'User' }) => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 1. Fetch complaints from backend (Correct Fetch Logic) ---
  const fetchComplaints = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Assuming this endpoint returns a list of all complaints
      const response = await fetch(`${API_BASE_URL}/status`); 
      
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }
      
      const data = await response.json();
      setComplaints(data);

    } catch (err) {
      console.error('Error fetching complaints:', err);
      setError(`Could not load complaints. Check the server connection.`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);


  // --- 2. Delete complaint from backend and UI (Correct Delete Fetch) ---
  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete complaint ID ${id}?`)) {
      return;
    }

    try {
      // **CORRECT FETCH CALL:** DELETE method to the ID endpoint
      const response = await fetch(`http://localhost:3000/complaints/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // Attempt to get the detailed error message from the backend response
        const errorBody = await response.json().catch(() => ({ message: 'Unknown server error.' }));
        throw new Error(errorBody.message || `Deletion failed with status: ${response.status}.`);
      }

      // Success: Reflect the deletion instantly in the UI
      setComplaints((prev) => prev.filter((c) => c.id !== id));
      alert(`Complaint ${id} deleted successfully.`);

    } catch (err) {
      console.error('Error deleting complaint:', err);
      setError(`Failed to delete complaint: ${err.message}`);
      // Re-fetch data to ensure UI is synchronized with the database after failure
      fetchComplaints(); 
    }
  };


  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}><CircularProgress /><Typography variant="body2" color="text.secondary" mt={1}>Loading complaints...</Typography></Box>
      );
    }

    if (error) {
      return (<Alert severity="error" sx={{ my: 2 }}>{error}</Alert>);
    }

    if (complaints.length === 0) {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}><BugReportIcon color="action" sx={{ fontSize: 40 }} /><Typography variant="subtitle1" color="text.secondary" mt={1}>No complaints found.</Typography></Box>
      );
    }

    return (
      <List>
        {complaints.map((complaint, index) => (
          <React.Fragment key={complaint.id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(complaint.id)}
                  size="small"
                  color="error"
                  sx={{ ml: 2 }} // Add margin for spacing
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="subtitle1">
                        {complaint.title} (ID: {complaint.id})
                    </Typography>
                    {getStatusChip(complaint.status)}
                  </Stack>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                      Submitted: {new Date(complaint.created_at).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">{complaint.description}</Typography>
                  </>
                }
              />
            </ListItem>
            {index < complaints.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    );
  };

  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Municipal Complaint Status
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {renderContent()}
      </CardContent>
      <Box sx={{ p: 2, borderTop: '1px solid #eee' }}>
        <Typography variant="caption" color="text.secondary">
          Total Complaints: {complaints.length}
        </Typography>
      </Box>
    </Card>
  );
};

export default ComplaintStatusList;