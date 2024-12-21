
import React ,{useState, useEffect} from 'react'
import classes from './Gallary.module.css'
import img1  from '../../assets/jima.jpg'
import img2  from '../../assets/Lekemt.jpg'
import img3  from '../../assets/Limu.jpg'
import left_arrow from '../../assets/left-arrow.png';
import right_arrow from '../../assets/right-arrow.png';


const background = [
    { id: 1, image: img1, title: 'Time for work' ,text: 'Fluid has Internet access, so you can get up-to-date information from it.'},
    { id: 2, image: img2 , title: 'Time for family' ,text: 'You can use Fluid as an assistant to save time - and save your sanity.'},
    { id: 3, image: img3,  title:'Time for friends', text:"Fluid easily integrates with your friends' calendars" }
];
function Galary() {
    const [count , setCount]= useState(0)
    // const [image, setImage] = useState(background[0].image)
  return (
    <div style={{
      backgroundImage: `url(${background[count].image})`,
    }} className={classes.outer__container}>
        {/* <div className={classes.content__wrapper}> */}
          <button onClick={()=> count > 0 ? setCount(count - 1) : setCount(2)}><img src={left_arrow} alt="" /></button>
          <button onClick={()=> count < 2 ? setCount(count +1): setCount(0) }><img src={right_arrow} alt="" /></button>
          
        {/* </div> */}
    </div>
  )
}

export default Galary
