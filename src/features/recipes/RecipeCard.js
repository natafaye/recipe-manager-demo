import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteRecipe } from './recipeSlice'

export default function RecipeCard({ recipe }) {
  const dispatch = useDispatch()

  const onDeleteClick = () => {
    dispatch(deleteRecipe(recipe.id))
  }

  return (
    <div className="border p-3 m-3 ms-0 rounded">
      <Link to={"/recipes/" + recipe.id}>
        <h4>{recipe.name}</h4>
      </Link>
      <p className="text-muted mb-0">{recipe.tags.join(", ")}</p>
      <button className="btn btn-outline-danger mt-2" onClick={onDeleteClick}>Delete</button>
    </div>
  )
}
