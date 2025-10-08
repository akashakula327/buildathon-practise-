import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Chip,
} from '@mui/material';

import {
  Water,
  ElectricalServices,
  Traffic, 
  Delete,
  HealthAndSafety,
  Business,
  Phone,
  Email,
  LocationOn,
  Schedule,
} from '@mui/icons-material';

const DepartmentDirectory = () => {
  // Define the data for all municipal departments
  const departments = [
    {
      name: 'Water Department',
      icon: <Water sx={{ fontSize: 60 }} />,
      color: '#1976d2', // Blue
      head: 'Dr. Rajesh Kumar',
      phone: '+91-123-456-7890',
      email: 'water@municipal.gov.in',
      address: 'Water Treatment Plant, Industrial Area',
      hours: '9:00 AM - 5:00 PM',
      description: 'Responsible for water supply, treatment, distribution, and maintenance of water infrastructure.',
      services: ['Water Supply', 'Water Quality Testing', 'Pipe Maintenance', 'Water Treatment'],
    },
    {
      name: 'Electricity Department',
      icon: <ElectricalServices sx={{ fontSize: 60 }} />,
      color: '#ff9800', // Orange/Amber
      head: 'Ms. Priya Sharma',
      phone: '+91-123-456-7891',
      email: 'electricity@municipal.gov.in',
      address: 'Power Distribution Center, Main Street',
      hours: '24/7 Emergency Service',
      description: 'Manages street lighting, power distribution, electrical maintenance, and emergency services.',
      services: ['Street Lighting', 'Power Distribution', 'Electrical Maintenance', 'Emergency Services'],
    },
    {
      name: 'Roads & Infrastructure',
      icon: <Traffic sx={{ fontSize: 60 }} />, 
      color: '#4caf50', // Green
      head: 'Mr. Amit Singh',
      phone: '+91-123-456-7892',
      email: 'roads@municipal.gov.in',
      address: 'Public Works Department, City Center',
      hours: '8:00 AM - 6:00 PM',
      description: 'Handles road construction, maintenance, traffic management, and infrastructure development.',
      services: ['Road Construction', 'Road Maintenance', 'Traffic Management', 'Infrastructure Development'],
    },
    {
      name: 'Waste Management',
      icon: <Delete sx={{ fontSize: 60 }} />,
      color: '#9c27b0', // Purple
      head: 'Mrs. Sunita Patel',
      phone: '+91-123-456-7893',
      email: 'waste@municipal.gov.in',
      address: 'Waste Collection Center, Industrial Zone',
      hours: '6:00 AM - 8:00 PM',
      description: 'Manages garbage collection, recycling programs, waste disposal, and sanitation services.',
      services: ['Garbage Collection', 'Recycling Programs', 'Waste Disposal', 'Sanitation Services'],
    },
    {
      name: 'Public Health',
      icon: <HealthAndSafety sx={{ fontSize: 60 }} />,
      color: '#f44336', // Red
      head: 'Dr. Vikram Mehta',
      phone: '+91-123-456-7894',
      email: 'health@municipal.gov.in',
      address: 'Public Health Center, Medical District',
      hours: '9:00 AM - 5:00 PM',
      description: 'Oversees public health initiatives, disease prevention, and health awareness programs.',
      services: ['Health Inspections', 'Disease Prevention', 'Health Awareness', 'Public Health Programs'],
    },
    {
      name: 'Administration',
      icon: <Business sx={{ fontSize: 60 }} />,
      color: '#607d8b', // Blue Grey
      head: 'Mr. Sanjay Gupta',
      phone: '+91-123-456-7895',
      email: 'admin@municipal.gov.in',
      address: 'Municipal Corporation Building, City Center',
      hours: '9:00 AM - 5:00 PM',
      description: 'Handles administrative functions, citizen services, and overall municipal governance.',
      services: ['Citizen Services', 'Administrative Support', 'Policy Implementation', 'Public Relations'],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom sx={{ color: '#1976d2', fontWeight: 700 }}>
            Municipal Departments
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Our dedicated departments work together to serve the community. 
            Contact the appropriate department for specific services and support.
          </Typography>
        </Box>

        {/* Department Cards Grid */}
        <Grid container spacing={4}>
          {departments.map((dept, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} // Two cards per row on medium and larger screens
              key={index}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  {/* Icon, Title, and Description */}
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Box sx={{ color: dept.color, mb: 2 }}>
                      {dept.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      sx={{ color: dept.color, fontWeight: 600 }}
                    >
                      {dept.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {dept.description}
                    </Typography>
                  </Box>

                  {/* Department Head */}
                  <Box sx={{ mb: 3, borderLeft: '3px solid #ccc', pl: 2 }}>
                    <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 600 }}>
                      Department Head
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {dept.head}
                    </Typography>
                  </Box>

                  {/* Contact Information */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#555', fontWeight: 600 }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Phone sx={{ fontSize: 16, color: dept.color }} />
                        <Typography variant="body2">{dept.phone}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Email sx={{ fontSize: 16, color: dept.color }} />
                        <Typography variant="body2">{dept.email}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn sx={{ fontSize: 16, color: dept.color }} />
                        <Typography variant="body2">{dept.address}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Schedule sx={{ fontSize: 16, color: dept.color }} />
                        <Typography variant="body2">{dept.hours}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Services Offered Chips */}
                  <Box>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#555', fontWeight: 600 }}>
                      Key Services
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {dept.services.map((service, serviceIndex) => (
                        <Chip
                          key={serviceIndex}
                          label={service}
                          size="small"
                          sx={{
                            backgroundColor: dept.color,
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>

                {/* Contact Button (Link removed) */}
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled // Button is disabled since the action (email link) was removed
                    sx={{
                      backgroundColor: dept.color,
                      // The disabled state will now handle the styling
                    }}
                  >
                    Contact Details Listed Above
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Emergency Contact Section */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            mt: 8,
            backgroundColor: '#fff3e0', // Light warning color background
            border: '2px dashed #e65100', // Warning color border
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: '#d32f2f', fontWeight: 700 }}>
            🚨 24/7 Emergency Contacts
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 600 }}>Fire Emergency</Typography>
              <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 800 }}>101</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 600 }}>Police Emergency</Typography>
              <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 800 }}>100</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 600 }}>Medical Emergency</Typography>
              <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 800 }}>108</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 3, color: '#d32f2f' }}>
            *These numbers are for life-threatening emergencies only. This digital portal is intended for general municipal complaints and inquiries.
          </Typography>
        </Paper>

        {/* General Office Hours Section */}
        <Paper elevation={2} sx={{ p: 4, mt: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
            General Office Hours
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Municipal Corporation Office
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Monday - Friday: 9:00 AM - 5:00 PM</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Saturday: 9:00 AM - 1:00 PM</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Sunday: Closed</Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Citizen Service Center
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Monday - Friday: 8:00 AM - 6:00 PM</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Saturday: 9:00 AM - 2:00 PM</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Schedule fontSize="small" /> Sunday: Closed</Box>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default DepartmentDirectory;
