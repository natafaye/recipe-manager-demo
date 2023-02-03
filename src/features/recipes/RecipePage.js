import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function RecipePage() {
    const { recipeId } = useParams()
    //const recipeId = params.recipeId;
    const recipe = useSelector(state => state.recipes.recipeList.find(recipe => recipe.id === recipeId))

    if(!recipe) {
        return (
            <h2 className="text-danger">404 ERROR</h2>
        )
    }

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{ recipe.tags.join(", ") }</p>
        </div>
    )
}
