import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from './RecipeCard'

export default function RecipeListPage() {
  const recipeList = useSelector(state => state.recipes.recipeList)
  return (
    <div className="row mt-4">
        <div className="col">
            <button className="btn btn-success">New Recipe</button>
            { recipeList.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
        </div>
    </div>
  )
}
