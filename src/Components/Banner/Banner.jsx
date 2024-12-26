
import React, { useRef, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../../assets/logo_last.png';
import Banne from '../../assets/Banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup'
import Scroll from 'react-scroll-trigger';
import classes from './Banner.module.css';
import {useTranslation} from 'react-i18next'
import CarouselEffect from '../Carousel/CarouselEffect';

gsap.registerPlugin(ScrollTrigger);

function Banner() {

  const name = useRef(null);
  const law = useRef(null);

  // detecting scroll using the react-scroll-trigger lib
  const [counterOn , setCounterOn] = useState(false)
  const [t, i18n] = useTranslation("global")

  useEffect(() => {

    const animation_2 = gsap.fromTo(
        law.current,
        { opacity : 0 }, 
        {
          opacity: 0.5,
          duration: 2,
          scrollTrigger: {
            trigger: name.current,
            start: 'top 60%',
            end: 'bottom 20%',
            scrub: true,
            
          },
        }
      );
     
    return () => {
      animation_2.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
   
  }, [counterOn]);

  useEffect(()=>{
    AOS.init({ duration: 1000, // Animation duration
      once: false,});
      AOS.refresh();
  },[counterOn])
   
  
  return (
    <div> 
      <CarouselEffect/>
    <div className={classes.banner_wrapper}>
      <img src={Banne} alt="" />
    <section className={classes.banner_container}>
    <div className={classes.banner}>
      <div className={classes.logo}>
        <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <h1 style={{ fontWeight:'900', fontFamily:'monospace'}} ref={name}>{t("home.header")} </h1>
        </Scroll>
      </div>
    </div>
    <div className={classes.data}>
       <div className={classes.pop_left} >
          <div className={classes.madrasas} data-aos="fade-right">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <p>10+ Employees</p>
            </Scroll>
          </div>
          
          <div className={classes.teachers} data-aos="fade-right" >
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <p>Special beans</p>
            </Scroll>
          </div>
          <div className={classes.graduates_mobile} data-aos="zoom-in">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className={classes.middle} start={0} end={5} duration={5} delay={0}/>}
            <p >variety choices</p>
            </Scroll>
          </div>
        </div>
      <div className={classes.pop_right}>
          <div className={classes.years} data-aos="fade-left">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className={classes.middle} start={0} end={1000000} duration={2} delay={0}/>}
            <p>1M+ capital</p>
            </Scroll>
          </div>
          <div className={classes.students} data-aos="fade-left">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <p>Leading quality</p>
            </Scroll> 
          </div>
          <div>

          </div>
      </div>

    </div>
    </section>
    </div>
    </div>
  );
}

export default Banner;

