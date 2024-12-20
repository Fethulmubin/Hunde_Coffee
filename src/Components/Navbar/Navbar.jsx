import React, { useState } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbar.css";
import logo from '../../assets/logo_last.png'
import logo_1 from '../../assets/logo_only.png'
import { Link } from 'react-router-dom';
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
// import logo from "../assets/favicon-32x32.png";
const Navbar = () => {
   const [clicked, setClicked] = useState(false);
   const [button, setButton] = useState('en');
   const [t, i18n] = useTranslation("global")

   // Define the click handler
   const handleClick = () => {
     setClicked(!clicked);
   };
   const handlechangeLanguage=(lang)=>{
    i18n.changeLanguage(lang)
   }
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <Link to = '/'>
        <img style={{objectFit:'contain'}} src={logo} alt="" />
        {/* <p>HUNDE COFFEE EXPORT</p> */}
        </Link>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i class={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
    
          <div>    
          {button === "en" ? <button style={{}} onClick={()=> {
            handlechangeLanguage("ar")
            setButton("ar")}}>ARABIC</button>:  <button onClick={()=> {handlechangeLanguage("en")
              setButton("en")
            }}>ENGLISH</button> }
        
          </div>
          
      </ul>
    </nav>
  );
};

export default Navbar;
