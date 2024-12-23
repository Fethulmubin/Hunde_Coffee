import React, { useState, useEffect } from 'react'
import classes from './Coffee.module.css'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Gallary from '../Gallary/Gallary'

import {  Api } from '../../Api/Api'


function Coffee() {
    const [ open , setOpen]= useState(null);
    const options = Api();
    const [t] = useTranslation("global")
    const handleOpenTogle = (id)=> {
      if(id === open) {
        setOpen(null);
      }else {
        setOpen(id);
      }
    }
  
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

                  {
                    // console.log(Api.objects)
                    options[0].map((item,index)=> 
                    <div key={index} className={classes.options}>
                      <h1 className={classes.btn} onClick={()=>handleOpenTogle(item.id)}>{item.name} <span>{open === item.id? "-": "+"}</span></h1>
                     {
                      open === item.id && item.option.map((ind, index)=>
                      <div key={index} className={classes.ind}>
                        {ind}
                      </div>
                      )
                     }
                    </div>
                    )
                  }
            </div>
            <div className={classes.coffeeT}>
                <div>
                    <h1> {t("home.coffee_types.nature.Our Coffee beans")}</h1>
                </div>
                <div>
                    <Gallary/>
                </div>
                <div className={classes.CoffeeDesc}>
                  {options[1].map(item=> 
                    <div key={item.id}>
                      <h1>{item.name}</h1>
                      <p>{item.desc}</p>
                    </div>
                  )}
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Coffee




