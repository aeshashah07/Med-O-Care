import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";

const pages = ["Upload", "Healthscore", "Period tracker"];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    //display modal
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    routing(page);
  };

  const routing = (page) => {
    page == "login" && navigate("login");
    page == "signup" && navigate("signup");
    page == "Upload" && navigate("uploadrecords");
    page == "Healthscore" && navigate("healthscore");
    page == "Period tracker" && navigate("periodtracker");
  };

  const handleCloseUserMenu = () => {
    //remove modal
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ bgcolor: "#C0EEF2", color: "black" }}>
          <Toolbar disableGutters>
            {/* when expanded logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                style={{ height: "80px", width: "80px" }}
                alt="logo"
              />
            </Typography>

            {/* when shrunk logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                style={{ height: "80px", width: "80px" }}
                alt="logo"
              />
            </Typography>

            {/* when shrunk links */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu(page);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}

                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu("signup");
                  }}
                >
                  <Typography textAlign="center">Sign Up</Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/*when expanded links*/}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                  sx={{ my: 2, display: "block", color: "black", mr: 4 }}
                >
                  {page}
                </Button>
              ))}
              <Box
                sx={{
                  display: "flex",
                  my: 2,
                  bgcolor: "#537FE7",
                  justifyContent: "center",
                  borderRadius: "10px",
                  height: "40px",
                  width: "90px",
                  mr: 4,
                }}
              >
                <Button
                  sx={{ display: "block", color: "white" }}
                  onClick={() => {
                    handleCloseNavMenu("signup");
                  }}
                >
                  Signup
                </Button>
              </Box>

              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 4 }}
              >
                <Button
                  sx={{ my: 2, color: "black" }}
                  onClick={() => {
                    handleCloseNavMenu("login");
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>

            <Tooltip title="My accounts">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;