import React from 'react'
import classes from "./Footer.module.css"
import Logo from "../../assets/logo.png";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
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
              <FaFacebook />
            </Link>
            <Link to="http://www.instagram.com/alimrancmc" target="_blank">
              < FaTelegram/>
            </Link>
            {/* <Link to="http://www.youtube.com/@alimrancmc" target="_blank">
              
            </Link> */}
            <Link to="https://t.me/Alimrancmc" target="_blank">
              <FaInstagram />
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
              <Link  to="coffee/description" >
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