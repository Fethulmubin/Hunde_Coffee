import React, { useState } from "react";
import classes from "./More.module.css"

function More() {
  const [isOpen_4, setIsOpen_4] = useState(false);
  const [isOpen_1, setIsOpen_1] = useState(true);
  const [isOpen_2, setIsOpen_2] = useState(false);
  const [isOpen_3, setIsOpen_3] = useState(false);
  const [isOpen_5, setIsOpen_5] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className={classes.more_wrapper}
     style={{ position: "relative" }}>
      <button
      className={classes.btn}
        onClick={() => setIsOpen_1(!isOpen_1)}
      >
       what is Our company's initiatvie vission ?
      </button>
      {isOpen_1 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc",
            }}
          >
            To become the leading Quality coffee exporting company that is
            always demanded by its customers
          </li>
        </ul>
      )}
      {/* for mission */}
      <button
      className={classes.btn}
        onClick={() => setIsOpen_2(!isOpen_2)}
      >
        What is Our Company's main misssion ?
      </button>
      {isOpen_2 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc",
            }}
          >
           Our mission is to ensure continuous supply of best quality coffee to the world
market through implementing improved and modern coffee production
practices and supply chain activities.
          </li>
        </ul>
      )}
      {/* for core values */}
      <button
      className={classes.btn}
        onClick={() => setIsOpen_3(!isOpen_3)}
      >
        Our Company's Core values
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
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc",
            }}
          >
            Giving priority to quality,
 Continuous learning for improvements, Innovation
 Professionalism
 Social responsibility
 Team work
 High Respect to our customers
          </li>
        </ul>
      )}
      {/* supply chain */}
      <button
      className={classes.btn}
        onClick={() => setIsOpen_4(!isOpen_4)}
      >
        What are our supplly chain ?
      </button>
      {isOpen_4 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc",
            }}
          >
           The main supply chain of the company is from the framer we plan to
establishing coffee processing site and also works with different coffee
producing farmers located at Oromia regional state Guji zone and Sidamo
regional states by establishing vertical integration with the local producers that
supply high quality specialty and conventional coffees.
          </li>
        </ul>
      )}
      {/* for export */}
      <button className={classes.btn}
        onClick={() => setIsOpen_5(!isOpen_5)}
      >
        What is our Company's export plan for upcoming years
      </button>
      {isOpen_5 && (
         <ul
         style={{
           listStyleType: "none",
           margin: 0,
           padding: 0,
           border: "1px solid #ccc",
           width: "100%",
           backgroundColor: "white",
           zIndex: 1000,
         }}
       >
         <li
           style={{
             padding: "10px",
             cursor: "pointer",
             borderBottom: "1px solid #ccc",
           }}
         >
          The company plans to export more than three thousand metric ton of green
coffee beans for the 2023/24 fiscal year and its export volume is increasing since
its time of establishment and working to expand its export to different parts of
the world.
         </li>
       </ul>
      )}
    </div>
  );
}

export default More;
