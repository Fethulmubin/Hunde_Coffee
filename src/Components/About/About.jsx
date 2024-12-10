import React from 'react'
import classes from'./About.module.css'
import coffee from '../../assets/pic_about.jpg'
import { Link } from 'react-router-dom'
import AboutPage from '../../Pages/About/AboutPage'
import { useTranslation } from 'react-i18next'
// import Contact from '../../Pages/Contact/Contact'

function About() {
    // const [t, i18n] = useTranslation("global")
    const [t, i18n] = useTranslation("global")
  return (
    <div className={classes.main_wrapper}>
    <div className={classes.title}>
        <h1>{t("home.about.title")}</h1>
    </div>
<div className={classes.wrapper}>
    <div className={classes.blogsL}>
        <div className={classes.blog_image}>
            <img src={coffee} alt="" />
        </div>
        <div className={classes.descriptionL}>
            <h2>{t("home.about.title")}</h2>
            <p style={{textAlign:'justify'}}>{t("home.about.pargraph1")} </p>
            <Link to='/about'>
            <button>More..</button>
            </Link>
            
        </div>
    </div>
</div>
</div>
  )
}

export default About;