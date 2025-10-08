import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const BlueBackground = styled(Box)({
  background: 'linear-gradient(to right, #004AAD, #002D8B)', // A gradient to match the image
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
});

const StyledButton = styled(Button)({
  margin: '10px',
  padding: '10px 30px',
  borderRadius: '5px',
  textTransform: 'none',
  fontSize: '1rem',
});

const PrimaryButton = styled(StyledButton)({
  backgroundColor: 'white',
  color: '#004AAD',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const SecondaryButton = styled(StyledButton)({
  backgroundColor: 'transparent',
  color: 'white',
  border: '1px solid white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

function MunicipalComplaintPortal() {
  return (
    <BlueBackground>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Municipal Complaint Portal
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4 }}>
          Submit and track complaints related to Water, Electricity, Roads, and Waste Management
        </Typography>
        <Box sx={{ my: 4 }}>
          <Typography variant="subtitle1" component="p">
            Your voice matters. Help us build a better city together.
          </Typography>
        </Box>
        <Box>
          <PrimaryButton variant="contained">
            Submit Complaint
          </PrimaryButton>
          <SecondaryButton variant="outlined">
            Track Complaint
          </SecondaryButton>
        </Box>
      </Container>
    </BlueBackground>
  );
}

export default MunicipalComplaintPortal;