import React from 'react';
import "./RecipeTitle.css"


const RecipeTitle = (props) =>
  <section>
    <h2>{ props.title }</h2>
    <h3
    className={ props.feedback.rating <= 3.5 ? "red" : "green" }
    style={{lineHeight: 0, marginBottom: "45px"}} >
      { props.feedback.rating } from { props.feedback.reviews } reviews
    </h3>
  </section>

export default RecipeTitle