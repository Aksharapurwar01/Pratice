import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginImg from "../../assests/images/login.svg";
import MenuItem from "@mui/material/MenuItem";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../../actions/authedUser";

function Login(props) {
  const theme = createTheme();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { dispatch } = props;
  const changeUser = (e) => {
    setUser(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(user));
    if (user) {
      navigate("/");
    }
  };

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
                onChange={(e) => changeUser(e.target.value)}
              >
                {Object.keys(props.users).map((user) => (
                  <MenuItem
                    key={props.users[user].id}
                    value={props.users[user].id}
                  >
                    {props.users[user].name}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={user === ""}
                sx={{
                  mt: 3,
                  mb: 2,
                }}
                onClick={(e) => handleSubmit(e)}
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

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps)(Login);
