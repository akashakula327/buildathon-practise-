// ComplaintForm.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Paper,
} from "@mui/material";

// Categories can be simplified or used to generate the Title
const categories = [
  "Garbage not collected",
  "Street light not working",
  "Water leakage",
  "Road potholes",
  "Drainage overflow",
  "Other",
];

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "", // Maps to 'title' column in the DB
    description: "", // Maps to 'description' column in the DB
    location: "", // New field for location
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.title || !formData.description || !formData.location) {
        alert("Please fill out all required fields (Title, Description, and Location).");
        return;
    }

    // The data prepared for submission would be:
    const submissionData = {
        // user_id would be added here from the authenticated user context/session
        // user_id: 1, 
        title: formData.title,
        description: formData.description,
        location: formData.location, // Including the new location data
    };

    console.log("Complaint Submitted:", submissionData);
    alert("Complaint submitted successfully! Your submission will be reviewed.");
    setFormData({ title: "", description: "", location: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#004AAD' }}>
          Submit a Complaint
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {/* TITLE field */}
          <FormControl fullWidth required>
            <InputLabel id="complaint-title-label">Complaint Title</InputLabel>
            <Select
              labelId="complaint-title-label"
              name="title"
              value={formData.title}
              onChange={handleChange}
              label="Complaint Title"
            >
              <MenuItem value="">
                <em>Select a common issue</em>
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* LOCATION field - NEW */}
          <TextField
            label="Exact Location/Address of Issue"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="E.g., Sector 15, Near City Park Entrance"
          />

          {/* DESCRIPTION field */}
          <TextField
            label="Detailed Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
            placeholder="Describe the issue in detail, including landmarks or nearby house numbers."
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
                mt: 1, 
                py: 1.5,
                backgroundColor: '#004AAD', // Matching the portal color
                '&:hover': { backgroundColor: '#002D8B' }
            }}
          >
            Submit Complaint
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ComplaintForm;