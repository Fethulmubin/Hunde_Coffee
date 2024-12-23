import React from 'react'
import classes from './Coffee_dis.module.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Coffee() {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={classes.coffee_wrapper}>
        
        <Link to={`coffee/description`}  onClick={() => window.scrollTo(0, 0)}>
        {/* <div className={classes.type1.wrapper}> */}
        <div className={classes.type1} >
            <p>Readmore...</p>
        </div>
        <p style={{textAlign:'center', fontSize:'30px'}} > yrgachefe coffee </p>
        </Link>
        <Link to={`coffee/description`}  onClick={() => window.scrollTo(0, 0)}>
        <div className={classes.type2} >
            <p>Readmore...</p>
        </div>
        <p style={{textAlign:'center', fontSize:'30px'}} >Limu Coffee </p>
        </Link>
        <Link to={`coffee/description`}  onClick={() => window.scrollTo(0, 0)} >
        <div className={classes.type3} >
            <p>Readmore...</p>
        </div>
        <p style={{textAlign:'center', fontSize:'30px'}} >Djimma Coffee </p>
        </Link>
        <Link to={`coffee/description`}  onClick={() => window.scrollTo(0, 0)}>
        <div className={classes.type4} >
            <p>Readmore...</p>
        </div>
        <p style={{textAlign:'center', fontSize:'30px'}} >Lekemti Origin </p>
        </Link>
    </div>
  )
}

export default Coffee