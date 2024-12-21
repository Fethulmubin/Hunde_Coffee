import React, { useState } from "react";
import classes from "./More.module.css"
import { Api } from "../../Api/Api";

function More() {
 
  const [open, setOpen] = useState(null);

  const options = Api();

  const handleOpenTogle = (id)=> {
    if(id === open) {
      setOpen(null);
    }else {
      setOpen(id);
    }
  }

  return (
    <div className={classes.more_wrapper}
     >
      {
        options[2].map((item,index)=> 
        <div key={index} className={classes.more_Each}>
          <h1 className={classes.btn} onClick={()=>handleOpenTogle(item.id)}>{item.name} <span>{open === item.id? "-": "+"}</span></h1>
          {open === item.id &&  <hr />}
          {open === item.id && <p>{item.desc}</p>}
        </div>
        )
      }
    </div>
  );
}

export default More;
