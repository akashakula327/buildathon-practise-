import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Campaign as CampaignIcon,
  WarningAmber,
  Menu as MenuIcon,
  Login as LoginIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

// Navigation items with paths
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Submit Complaint', path: '/complaint' },
  { name: 'Track Complaint', path: '/track-complaint' },
  { name: 'Departments', path: '/departments' },
  { name: 'Services', path: '/services' },
];

const Logo = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', py: 1 }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CampaignIcon sx={{ color: '#004d40', fontSize: 28, mr: 1 }} />
      <Typography variant="h6" sx={{ fontWeight: 800, color: '#004d40' }}>
        Government Portal
      </Typography>
    </Box>
    <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1, ml: 4 }}>
      Official City Services
    </Typography>
  </Box>
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation(); // Get current path

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const EmergencyAlertBanner = () => (
    <Box sx={{
      backgroundColor: '#ff9f0eff',
      color: '#000000',
      py: 1,
      px: 2,
      textAlign: 'center',
      fontSize: '0.85rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      fontWeight: 500,
    }}>
      <WarningAmber sx={{ fontSize: 18 }} />
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        **Important Notice:** Upcoming policy changes effective next month. <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Read Details</span>
      </Typography>
    </Box>
  );

  // Mobile Drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'left', px: 4 }}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        {/* Mobile Login Button */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left', px: 4 }}>
            <LoginIcon sx={{ mr: 1 }} /> Login
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <EmergencyAlertBanner />
      <AppBar position="static" color="inherit" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '64px' }}>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? '#004d40' : 'text.primary',
                      fontWeight: 600,
                      borderRadius: 0,
                      mx: 1,
                      py: 3,
                      borderBottom: location.pathname === item.path ? '4px solid #004d40' : '4px solid transparent',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#004d40',
                        borderBottom: '4px solid #004d40',
                        opacity: 0.8,
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}

                {/* Desktop Login Button */}
                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 32 }} />
                <Button
                  color="inherit"
                  startIcon={<LoginIcon />}
                  sx={{
                    color: '#004d40',
                    borderColor: '#004d40',
                    border: '1px solid',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, color: '#004d40' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
