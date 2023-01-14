import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginImg from "../../assests/images/login.svg";
import MenuItem from '@mui/material/MenuItem';
export default function login() {
  const theme = createTheme();
  const users = [
    {
      value: 1,
      label: "user1",
    },
    {
      value: 2,
      label: "user2",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        component="main"
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          item
          md={12}
          justifyContent="center"
          style={{
            textAlign: "center",
            height: "250px",
          }}
        >
          <h2> Employee Polls </h2>
          <img
            src={loginImg}
            style={{
              width: "500px",
              height: "300px",
              marginLeft: "auto",
              margin: "auto",
            }}
          />
        </Grid>
        <Grid item elevation={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{
                mt: 1,
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="user"
                fullWidth
              >
                {users.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
