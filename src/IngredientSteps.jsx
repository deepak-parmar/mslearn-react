import React from "react";

const IngredientSteps = (props) => {
  return (
    <ol>{

      props.steps.map((step, index) => {
        return <li key={index}>{ step }</li>
      })
      
    }</ol>
  )
}

export default IngredientSteps