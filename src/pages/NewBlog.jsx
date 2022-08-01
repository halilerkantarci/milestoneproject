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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blog from "../assets/blok.png";
import { useState } from "react";
import { createUser, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function NewBlog({ info, setInfo, handleSubmit }) {
  const navigate = useNavigate();
  console.log(info);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        // style={{
        //   backgroundImage: "url(https://picsum.photos/1600/900)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   width: "100%",
        //   height: "100vh",
        //   paddingTop: "40px",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
      >
        <Box
        // sx={{
        //   backgroundColor: "white",
        //   boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.61)",
        //   borderRadius: "10px",
        //   maxheight: "650px",
        //   width: "450px",
        //   marginBottom: "10px",
        // }}
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
                bgcolor: "primary.dark",
                height: "250px",
                width: "250px",
              }}
            >
              <img src={blog} />
            </Avatar>
            <Typography component="h1" variant="h5">
              ── NEW BLOG ──
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ m: 1, display: "flex", flexDirection: "column", gap: "2" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={info.title}
                autoComplete="title"
                autoFocus
                sx={{ width: "350px" }}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="img"
                value={info.img}
                label="Image URL"
                type="text"
                id="imageURL"
                autoComplete="text"
                onChange={handleChange}
              />
              <TextField
                style={{ marginTop: "1rem" }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                fullWidth
                name="content"
                value={info.content}
                label="Content"
                type="info"
                id="info"
                multiline
                rows={7}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
