import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, makeStyles } from "@mui/material/styles";
import blok from "../assets/blok.png";
import "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../helpers/firebase";
import { AddUser, AddUser1 } from "../helpers/functions";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ setEmail, email }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleGoogle = () => {
    signUpProvider(navigate);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        style={{
          backgroundImage: "url(https://picsum.photos/1600/900)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          paddingTop: "40px",
          backgrounColor: "red",
          height: "110vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            width: 600,
            padding: "3rem",
            borderRadius: "3rem",
            height: 800,
            marginBottom: "25px",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#303f9f",
                width: "240px",
                height: "240px",
              }}
            >
              <img src={blok} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 1 }}
                onClick={handleGoogle}
              >
                WITH GOOGLE
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
