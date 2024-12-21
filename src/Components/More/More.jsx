import React, { useState } from "react";
import classes from "./More.module.css"
import { moreChoice } from "../../Api/Api";

function More() {
  const [isOpen_4, setIsOpen_4] = useState(false);
  const [isOpen_1, setIsOpen_1] = useState(true);
  const [isOpen_2, setIsOpen_2] = useState(false);
  const [isOpen_3, setIsOpen_3] = useState(false);
  const [isOpen_5, setIsOpen_5] = useState(false);
  const [open, setOpen] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className={classes.more_wrapper}
     style={{ position: "relative" }}>
      {
        moreChoice.map((item,index)=> 
        <div key={index}>
          <h1 className={classes.btn} onClick={()=>setOpen(item.id)}>{item.name} <span>{open === item.id? "-": "+"}</span></h1>
          {open === item.id && <p>{item.desc}</p>}
        </div>
        )
      }
    </div>
  );
}

export default More;
