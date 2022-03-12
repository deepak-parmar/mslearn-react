import React from "react";
import "./IngredientList.css"


const IngredientList = (props) =>
  <ul>{
    // returns array of <li> elements containing ingredient items
    props.ingredients.map((item, index) => {
      return (
        <li
        key={index}
        className={ item.prepared ? "prepared" : '' }
        onClick={ () => props.onClick(index) } // important to keep () => {} in onClick
        style={{cursor: "pointer"}} >
          { item.name }
        </li>
      )
    })
  }</ul>

export default IngredientList