import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { styled } from '@mui/system';

const SimpleFooterContainer = styled(Box)({
  backgroundColor: '#ffffffff', // A dark grey/blue color
  color: 'black',
  padding: '20px 0',
  textAlign: 'center',
});

const FooterLink = styled(Link)({
  color: 'black',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Footer() {
  return (
    <SimpleFooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2025 Government of Municipal City. All rights reserved.
        </Typography>
        <Box>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </Box>
      </Container>
    </SimpleFooterContainer>
  );
}

export default Footer;