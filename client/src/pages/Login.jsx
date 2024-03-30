import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import {ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import LockIcon from "@mui/icons-material/Lock";





const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("Login succesful!");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleClick = async () => {
    const res = await axios.post("http://localhost:8000/auth/login", {
      email,
      password
    });
    console.log(res);
    notify();
    if (res.data.success === true) {
      setTimeout(() => {
        navigate('/Dashboard');
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
                Log In
              </Typography>

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
                placeholder="Your email"
                onChange={handleEmail}
                value={email}
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
                placeholder="Password"
                onChange={handlePassword}
                value={password}
                type="password"
              ></TextField>

              <Button
                variant="contained"
                sx={{ width: "80%", textTransform: "none", marginTop: "2%" }}
                onClick={handleClick}

              >
               
                Log In
              </Button>
              <ToastContainer/>

              <Stack width={"80%"} textAlign={"right"}>
                <Link style={{ textDecoration: "none" }}>
                  <Typography
                    marginTop={"1px"}
                    fontFamily={"Poppins"}
                    fontWeight={500}
                    fontSize={"15px"}
                    letterSpacing={"0.1px"}
                    color={"#0062FF"}
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </Stack>
              <Stack width={"80%"} flexDirection={"row"} marginTop={"3%"}>
                <Typography
                  letterSpacing={"0.1px"}
                  fontWeight={"400"}
                  color={"#969ab8"}
                  fontFamily={"Poppins"}
                  fontSize={"12px"}
                >
                  Don't have an account?
                </Typography>

                <Link to="/Signup" style={{ textDecoration: "none" }}>
                  <Typography
                    letterSpacing={"0.1px"}
                    fontWeight={"400"}
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    color={"#0062ff"}
                    marginLeft={"5px"}
                  >
                    Sign up
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

export default Login;
