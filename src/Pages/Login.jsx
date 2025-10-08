import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
  };

  function Login() {
  fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
}

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#1976d2" }}
          >
            Municipal Complaint Portal
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "gray" }}
          >
            Login
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2, py: 1 }}
            >
              Login
            </Button>

            <Typography align="center" sx={{ mt: 2 }}>
              Don’t have an account?{" "}
              <a
                href="/register"
                style={{ color: "#1976d2", textDecoration: "none" }}
                onClick={Login}
              >
                Register here
              </a>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
