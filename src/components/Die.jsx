import React from "react";


export default  function Die (props) {

  
   return(
    <div className={ props.held ? 'die-face1' : 'die-face' } >
        <h2 onClick={() => props.rollDice(props.id)} className="die-num">
            {props.value}
        </h2>
        
    </div>
   ) 
}