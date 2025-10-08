// ComplaintStatus.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Chip,
} from "@mui/material";

// Status color mapping
const statusColors = {
  NEW: "primary",
  IN_PROGRESS: "warning",
  RESOLVED: "success",
  REJECTED: "error",
};

// Dummy data (simulate backend)
const complaintsData = [
  { id: "C1001", date: "2025-10-01", status: "NEW" },
  { id: "C1002", date: "2025-10-03", status: "IN_PROGRESS" },
  { id: "C1003", date: "2025-09-28", status: "RESOLVED" },
  { id: "C1004", date: "2025-09-30", status: "REJECTED" },
];

const ComplaintStatus = () => {
  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");

  const handleCheckStatus = () => {
    const found = complaintsData.find(
      (c) => c.id === complaintId.toUpperCase()
    );
    if (found) {
      setComplaint(found);
      setError("");
    } else {
      setComplaint(null);
      setError("Complaint ID not found.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%)",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: "#004d40",
              textAlign: "center",
            }}
          >
            Check Complaint Status
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              label="Complaint ID"
              variant="outlined"
              fullWidth
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckStatus}
              sx={{
                px: 3,
                fontWeight: 600,
              }}
            >
              Check
            </Button>
          </Box>

          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          {complaint && (
            <Box sx={{ mt: 2, textAlign: "left" }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Complaint ID:</strong> {complaint.id}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Filed Date:</strong> {complaint.date}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <strong>Status:</strong>{" "}
                <Chip
                  label={complaint.status}
                  color={statusColors[complaint.status]}
                  sx={{ fontWeight: 600 }}
                />
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ComplaintStatus;
