import React from 'react'
import classes from "./Footer.module.css"
import Logo from "../../assets/logo.png";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TelegramIcon from '@mui/icons-material/Telegram';
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className={classes.footer}>
        <div className={classes.icons__container}>
          <div className={classes.logo_alimran}>
            <img src={Logo} alt="hunde" target="_blank" />
          </div>

          <div className={classes.icons}>
            <Link to="http://www.facebook.com/alimrancmc" target="_blank">
              {/* <FacebookOutlinedIcon /> */}
            </Link>
            <Link to="www.instagram.com/alimrancmc" target="_blank">
              {/* <InstagramIcon /> */}
            </Link>
            <Link to="www.youtube.com/@alimrancmc" target="_blank">
              {/* <YouTubeIcon /> */}
            </Link>
            <Link to="https://t.me/Alimrancmc" target="_blank">
              {/* <TelegramIcon /> */}
            </Link>
          </div>
        </div>

        <div className={classes.links__container}>
          <h2>Useful links</h2>
          <ul className={classes.list}>
            <li>
              <Link  to="/">
                Home
              </Link>
            </li>
            <li>
              <Link  to="/about">
                About
              </Link>
            </li>
            <li>
              <Link  to="/service" >
                Our Coffee
              </Link>
            </li>
            <li>
              <Link  to="/contact" >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.contact__container}>
          <h2>Address</h2>
          <p>Hunde@gmail.com</p>
          <p>+1-202-386-2702</p>
          <div className={classes.location}>
            {/* <LocationOnIcon/> */}
            <p>Ethiopia, Addis Ababa, </p>
          </div>
          
        </div>
      </section>
    </footer>
  );
}

export default Footer