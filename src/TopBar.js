import React from 'react'
import { useSelector } from 'react-redux'

export default function TopBar() {
    const numRecipes = useSelector(state => state.recipes.recipeList.length)
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Recipes</span>
                <div>{ numRecipes } Recipes</div>
            </div>
        </nav>
    )
}
