import React from "react";
import "./style.css";

function CatCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.shuffleCats()}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}


// let score = 0;

// adjustScore => (props) {
// if(props.clicked === 0){
//   score++
//   props.clicked = 1
//   props.shuffleCats() 
// } else {
//   score = 0;
// }
// }



export default CatCard;