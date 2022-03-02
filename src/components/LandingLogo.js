import { Typography } from "@mui/material";
import logo from "../img/logo.svg";

const LandingLogo = () => {
  return (
    <>
      <img src={logo} alt="" width={400} />
      <Typography variant="h4">E-Commerce</Typography>
    </>
  );
};

export default LandingLogo;
