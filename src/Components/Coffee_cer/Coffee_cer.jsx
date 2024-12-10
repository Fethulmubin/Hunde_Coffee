import React, {useEffect} from 'react'
import classes from './Coffee_cer.module.css'
import AOS from 'aos';

function Coffee_cer() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
    <h1 style={{textAlign:'center', fontSize:'40px'}}>Our Coffee Ceremoney</h1>
    <div className={classes.cermoney_wrapper}>
           <div className={classes.roasting} data-aos="fade-right">
            <p>THE COFFEE ROASTING</p>
          </div>
          <div className={classes.mort} data-aos="fade-right">
            <p>THE COFFEE GINDDED</p>
          </div>
          <div className={classes.boil} data-aos="fade-right">
            <p>THE COFFEE POWDER BOILING WITH WATER</p>
          </div>
          <div className={classes.serve} data-aos="fade-right">
            <p>THE COFFEE SERVED</p>
          </div>
    </div>
    </div>
  )
}

export default Coffee_cer