import React from 'react'
import classes from "./Footer.module.css"
import Logo from "../../assets/logo.png";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

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
            <Link to="http://www.facebook.com/alimrancm" target="_blank">
              <FaWhatsapp />
            </Link>
            <Link to="t.me/" target="_blank">
              < FaTelegram/>
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
          <p><span><MdEmail className={classes.ico}/></span>hunde@hktcoffee-export.com</p>
          <p><span><CiPhone className={classes.ico}/></span>+251911319603</p>            
          <p><span><CiLocationOn className={classes.ico}/></span>Ethiopia, Addis Ababa </p>

          
        </div>
      </section>
    </footer>
  );
}

export default Footer