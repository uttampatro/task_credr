import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import image from "../images/scooter.png";
import "./style.css";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
          width: "100%",
          borderBottomRightRadius: "100% 60%",
          background:
            "linear-gradient(to right, #2e1e4d, #682381 70%, #2e1e4d)",
        }}
      >
        <div style={{ color: "white", paddingRight: "50px" }}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate at faucibus purus.
          </p>
          <div>
            <div
              style={{
                lineHeight: "0.05px",
                borderBottom: "1px dashed white",
                border: "1px dashed white",
                borderRadius: "3px",
                marginTop: "50px",
                width: "70%",
                paddingBottom: "25px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginLeft: "25px",
                  border: "1px dashed white",
                  fontSize: "small",
                  padding: "5px 20px",
                  background: "white",
                  color: "#da2128",
                }}
              >
                WHAT WE OFFER
              </span>
              <ul>
                <li
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    fontSize: "40px",
                  }}
                >
                  <p className="bulletName">Lorem ipsum dolor</p>
                </li>
                <li
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    fontSize: "40px",
                  }}
                >
                  <p className="bulletName">Lorem ipsum dolor</p>
                </li>
                <li
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    fontSize: "40px",
                  }}
                >
                  <p className="bulletName">Lorem ipsum dolor</p>
                </li>
                <li
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    fontSize: "40px",
                  }}
                >
                  <p className="bulletName">Lorem ipsum dolor</p>
                </li>
                <li
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    fontSize: "40px",
                  }}
                >
                  <p className="bulletName">Lorem ipsum dolor</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Container maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "4px",
                marginTop: "20px",
                //   paddingTop: "100px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
              }}
            >
              <Typography style={{ paddingLeft: 0, paddingRight: "210px" }}>
                Personal Details
              </Typography>
              <Box component="form" sx={{ mt: 1 }}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="mobile number"
                      label="Mobile Number"
                      type="mobile number"
                      id="mobile number"
                      autoComplete="mobile number"
                    />
                  </Grid>
                </Grid>
                <FormControl sx={{ width: "100%", marginTop: "40px" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    //   value={age}
                    label="Age"
                    //   onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Mumbai</MenuItem>
                    <MenuItem value={20}>Bangalore</MenuItem>
                    <MenuItem value={30}>Pune</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    height: "50px",
                    borderRadius: "none",
                    marginTop: "40px",
                    padding: "3px",
                    marginBottom: "70px",
                    backgroundColor: "#da2128",
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
      <div
        style={{
          borderTopRightRadius: "100% 80%",
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",

          background: "white",
          width: "100%",
        }}
      >
        <div style={{ padding: "50px" }}>
          <div style={{ paddingBottom: "50px" }}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>

          <div>
            <h3>Lorem ipsum</h3>
            <Typography style={{ paddingBottom: "15px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </div>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
      <div
        style={{
          background: "#f4f7fd",
          textAlign: "center",
          paddingTop: "5px",
          paddingBottom: "20px",
        }}
      >
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
          at faucibus purus.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginRight: "100px",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                1
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                2
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                3
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
          </div>
          <div style={{ marginRight: "100px" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                4
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                5
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  borderRadius: "50%",
                  marginLeft: "100px",
                  paddingTop: "5px",
                  width: "40px",
                  height: "40px",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                6
              </h3>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                }}
              >
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
