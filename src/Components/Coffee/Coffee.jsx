import React, { useState, useEffect } from 'react'
import classes from './Coffee.module.css'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import {useTranslation} from 'react-i18next'
import BannerComponent from '../../Pages/Contact/BannerComponent/BannerComponent'


function Coffee() {
    const [t, i18n] = useTranslation("global")
    const [isOpen_1, setIsOpen_1] = useState(false)
    const [isOpen_2, setIsOpen_2] = useState(false)
    var {name} = useParams();
    const navigate = useNavigate();
    const [isOpen_3, setIsOpen_3] = useState(false);
    
    // const [selectedOption, setSelectedOption] = useState("Select an option");
  
    // const toggleDropdown = () => setIsOpen(!isOpen);
  
    // const handleOptionClick = () => {
    //   // setSelectedOption(opti);
    //   setIsOpen(false);
    // };
  
    const options_1 = [t("home.coffee_types.Washed.Sidamo Grade 2"),
            t("home.coffee_types.Washed.Yirgacheffe Grade 2"),
                t("home.coffee_types.Washed.Bebeka Grade 2"),
                    t("home.coffee_types.Washed.Lekemti Grade 2"),
                        t("home.coffee_types.Washed.Tepi Grade 2"),
                            t("home.coffee_types.Washed.Limu Grade 2"),
                            t("home.coffee_types.Washed.Guji Grade 2")];
    const options_2 =  [t("home.coffee_types.UnWashed.Guji Gr3 & 4"),
        t("home.coffee_types.UnWashed.Sidamo Gr3 & 4"),
            t("home.coffee_types.UnWashed.Lekemti Gr4 & 5"),
                t("home.coffee_types.UnWashed.Yirgacheffe Gr3 & 4"),
                    t("home.coffee_types.UnWashed.Djimma Gr4 & 5"),
                        t("home.coffee_types.UnWashed.Harar grade 4"),];
    const options_3 = [t("home.coffee_types.Special.Limu"),
        t("home.coffee_types.Special.Sidamo specialty"),
            t("home.coffee_types.Special.Yirgacheffe specialty"),
                t("home.coffee_types.Special.Guji washed and unwashed specialty")];
  
  return (
    
    <div>
        <Navbar/>
        {/* <BannerComponent/> */}
    <div className={classes.banner}>
      <div className={classes.overlay}>
        <h1 className={classes.title}>Our Coffee</h1>
        <p className={classes.breadcrumb}>
          <Link to="/" className={classes.homeLink}>
            Home /
          </Link>
          <span>Our Coffee</span>
        </p>
      </div>
    </div>
    {/* <div style={{height: "800px", width: "100%"}}></div> */}
        <div className={classes.drop_coffee_wrapper}>
                {/* drop down coffees */}
                <div style={{ position: "relative", width: "200px" }}>
      <button
        onClick={()=> setIsOpen_1(!isOpen_1)}
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {t("home.coffee_types.nature.washed")}
      </button>
      {  isOpen_1 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            // position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          {options_1.map((option, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* for unwashed */}
      <button
        onClick={()=> setIsOpen_2(!isOpen_2)}
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {t("home.coffee_types.nature.Unwashed")}
      </button>
      {isOpen_2 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            // position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          {options_2.map((option, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {/* for special */}
      <button
        onClick={()=> setIsOpen_3(!isOpen_3)}
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {t("home.coffee_types.nature.special")}
      </button>
      {isOpen_3 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            // position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          {options_3.map((option, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
            <div className={classes.coffeeT}>
                <div>
                    <h1>{t(`home.coffee_types.${name}`)}</h1>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Coffee


// import React, { useState } from 'react';

// function Coffee() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Select an option");

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleOptionClick = () => {
//     // setSelectedOption(opti);
//     setIsOpen(false);
//   };

//   const options = ["Option 1", "Option 2", "Option 3"];

//   return (
//     <div style={{ position: "relative", width: "200px" }}>
//       <button
//         onClick={toggleDropdown}
//         style={{
//           width: "100%",
//           padding: "10px",
//           cursor: "pointer",
//           textAlign: "left",
//         }}
//       >
//         {selectedOption}
//       </button>
//       {isOpen && (
//         <ul
//           style={{
//             listStyleType: "none",
//             margin: 0,
//             padding: 0,
//             border: "1px solid #ccc",
//             position: "absolute",
//             width: "100%",
//             backgroundColor: "white",
//             zIndex: 1000,
//           }}
//         >
//           {options.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => handleOptionClick()}
//               style={{
//                 padding: "10px",
//                 cursor: "pointer",
//                 borderBottom: "1px solid #ccc",
//               }}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Coffee;
