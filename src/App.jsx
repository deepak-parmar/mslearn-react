import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle';
import IngredientsList from "./IngredientList"
import IngredientSteps from './IngredientSteps';


const App = () => {

	const initialRecipe = {
		title: 'Mashed Potatoes',
		feedback: {
			rating: 2.8,
			reviews: 15
		},
		ingredients: [
			{ name: '3 potatoes, cut into 1/2" pieces', prepared: false },
			{ name: '4 Tbsp butter', prepared: false },
			{ name: '1/8 cup heavy cream', prepared: false },
			{ name: 'Salt', prepared: true },
			{ name: 'Pepper', prepared: true },
		],
		steps: [
			"Add cut potatoes to a pot of heavily salted water.",
			"Bring pot to a boil.",
			"Boil the potatoes until fork tender, about 15-20 minutes.",
			"Strain the potatoes.",
			"Return potatoes to pot.",
			"Add butter, cream, salt, and pepper to taste.",
			"Mash potatoes.",
			"Reseason and add butter and cream as desired."
		]
	};

	const [recipe, setRecipe] = useState(initialRecipe)

	const [prepared, setPrepared] = useState(false)

	// EventListener to mark ingredient as prepared
	const ingredientClick = (index) => {
		const updatedRecipe = {...recipe}
		updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared
		setRecipe(updatedRecipe)
	}

	// sets prepared to true if all ingredients are prepared (true)
	useEffect(() => {
		setPrepared(recipe.ingredients.every(ingredient => ingredient.prepared))
	}, [recipe])

	return (
		<article>

			<h1 style={{fontSize: "2.2rem"}}>Recipe Manager</h1>
			<hr />
			
			<RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
			
			<h4 style={{lineHeight: 0}}>Ingredients:</h4>
			<IngredientsList ingredients={ recipe.ingredients } onClick={ingredientClick} />

			<h4 style={{lineHeight: 0}}>Steps:</h4>
			<IngredientSteps steps={ recipe.steps } />

			{
				prepared	// state of all ingredients
				? <h2>Prep work done!</h2>  // display if all ingredients are prepared
				: <h2>Just keep chopin'.</h2>  // display if not
			}

		</article>
	)
}

export default App;