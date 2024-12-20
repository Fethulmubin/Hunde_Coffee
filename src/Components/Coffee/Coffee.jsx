import React, { useState, useEffect } from 'react'
import classes from './Coffee.module.css'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Gallary from '../Gallary/Gallary'


function Coffee() {
    const [t, i18n] = useTranslation("global")
    const [isOpen_1, setIsOpen_1] = useState(true)
    const [isOpen_2, setIsOpen_2] = useState(false)
    var {name} = useParams();
    const navigate = useNavigate();
    const [isOpen_3, setIsOpen_3] = useState(false);
  
  
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
  
     <div className={classes.drop_coffee_wrapper}>
                {/* drop down coffees */}
                <div style={{ position: "relative", width: "200px", marginTop:"50px" }}>
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
                    <h1>our coffee beans</h1>
                </div>
                <div>
                    <Gallary/>
                </div>
                <div className={classes.CoffeeDesc}>

                <div>
                  <h1 >yirga chefie coffee</h1>
                    <p >
Internationally Known and recognized as Yirgachaffee Brand Name.
Grown coffee and has intense flavor known as flora. Has fine acidity
and rich body. Many rosters are attracted to its fine and flavor and are
willing to pay a premium price for it.</p>
                </div>
                <div>
                  <h1 >limmu coffee</h1>
                    <p >
Spicy and Winy flavor and attracts many roasters specially Europe and
USA, has good acidity and body, washed Limmu is one of premium
coffee, medium sized bean and greenish- bluish in color mostly round
in shape.</p>
                </div>
                <div>
                  <h1 >Djimmah Coffee</h1>
                    <p >
Altitude heavy bodied cup with winy after test can be prepared as
washed and sun dried.</p>
                </div>
                <div>
                  <h1 >Lekemti Origin</h1>
                    <p >
                    Medium-to-bold bean known for its fruity taste, has greenish-brownish
in color with good acidity and body, there are many roasters who put
its flavor in their blends, but it can also sold as an original gourmet or
special original flavor.</p>
                </div>


                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Coffee




