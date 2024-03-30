import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stack from "@mui/material/Stack";
import axios from "axios";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import LockIcon from "@mui/icons-material/Lock";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";

const Signup = () => {
  const notify = () => toast("Sign Up succesful!");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSecretCode = (e) => {
    setSecretCode(e.target.value);
  };

  const handleClick = async () => {
    const res = await axios.post("http://localhost:8000/auth/register", {
      username,
      password,
      email,
      secretCode,
    });
    console.log(res);
    notify();
    if (res.data.success === true) {
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
    
  };

  return (
    <div>
      <Stack alignItems={"center"}>
        <Stack
          width={"50%"}
          height={"99.8vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              width={"80%"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"60vh"}
            >
              <Typography
                fontFamily={"Poppins"}
                fontWeight={"600"}
                fontSize={"25px"}
              >
                Sign Up
              </Typography>

              <TextField
                sx={{
                  width: "80%",
                  marginTop: "5%",
                  fontFamily: "Poppins",
                  fontSize: "1px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonRoundedIcon opacity={"0.5"}></PersonRoundedIcon>
                    </InputAdornment>
                  ),
                }}
                size="small"
                value={username}
                onChange={handleUsername}
                placeholder="First name"
              ></TextField>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MarkEmailUnreadRoundedIcon
                        opacity={"0.5"}
                      ></MarkEmailUnreadRoundedIcon>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "80%", marginTop: "2%" }}
                size="small"
                value={email}
                onChange={handleEmail}
                placeholder="Your email"
                type="email"
              ></TextField>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon opacity={"0.5"}></LockIcon>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "80%", marginTop: "2%" }}
                size="small"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
                type="password"
              ></TextField>

              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NumbersRoundedIcon opacity={"0.5"}></NumbersRoundedIcon>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "80%", marginTop: "2%" }}
                size="small"
                placeholder="Enter numeric code"
                value={secretCode}
                onChange={handleSecretCode}
                type="number"
              ></TextField>

              <Button
                variant="contained"
                sx={{ width: "80%", textTransform: "none", marginTop: "2%" }}
                onClick={handleClick}
              >
                Sign Up
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />

              <Stack width={"80%"} flexDirection={"row"} marginTop={"3%"}>
                <Typography
                  letterSpacing={"0.1px"}
                  fontWeight={"400"}
                  color={"#969ab8"}
                  fontFamily={"Poppins"}
                  fontSize={"12px"}
                >
                  Already have an account?
                </Typography>

                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    letterSpacing={"0.1px"}
                    fontWeight={"400"}
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    color={"#0062ff"}
                    marginLeft={"5px"}
                  >
                    Log In
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </div>
  );
};

export default Signup;
