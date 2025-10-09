import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Alert,
} from '@mui/material';

const ComplaintForm = () => {
  // State to hold form data. user_id is set to 0 or null if you want it to be a number.
  const [formData, setFormData] = useState({
    user_id: '', // Stored as string initially due to input type
    title: '',
    description: '',
  });

  // State for form submission feedback
  const [submitMessage, setSubmitMessage] = useState({
    type: '', // 'success' or 'error'
    text: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    // Convert user_id to a number if it has a value, otherwise keep it as an empty string
    if (name === 'user_id' && value) {
      // Ensure it's treated as a number for the final formData state
      finalValue = parseInt(value, 10);
      // Optional: Add client-side check if parsing failed (though type="number" helps prevent this)
      if (isNaN(finalValue)) {
        finalValue = value; // Keep original value if not a valid number
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: '', text: '' }); // Clear previous messages

    // Basic validation
    // Check if user_id is a valid number greater than 0
    if (isNaN(formData.user_id) || formData.user_id < 1 || !formData.title || !formData.description) {
      setSubmitMessage({ type: 'error', text: 'Please ensure all fields are filled correctly (User ID must be a number).' });
      return;
    }

    console.log('Submitting complaint:', formData);

    // --- Backend API Call ---
    try {
      // NOTE: formData.user_id is now a number if filled, which is great for the backend.
      const response = await fetch('http://localhost:3000/complaint/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // The body now sends user_id as a JS Number type
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Complaint submitted successfully:', result);
        setSubmitMessage({ type: 'success', text: 'Complaint submitted successfully!' });
        // Reset form fields
        setFormData({ user_id: '', title: '', description: '' });
      } else {
        const errorData = await response.json();
        console.error('Error submitting complaint:', errorData);
        setSubmitMessage({ type: 'error', text: `Failed to submit complaint: ${errorData.message || 'Server error'}` });
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', p: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Submit a New Complaint
        </Typography>

        {submitMessage.text && (
          <Alert severity={submitMessage.type} sx={{ mb: 2 }}>
            {submitMessage.text}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Your User ID"
            type="number"
            name="user_id"
            // Display the current value, which might be a number or ''
            value={formData.user_id} 
            onChange={handleChange}
            required
            InputProps={{ inputProps: { min: 1 } }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Complaint Title (Short Summary)"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            inputProps={{ maxLength: 100 }}
            placeholder="e.g., Street light not working"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Full Description of the Issue"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
            placeholder="Provide details: location, duration, impact, etc."
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Complaint
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComplaintForm;