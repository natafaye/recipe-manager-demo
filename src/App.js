import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RecipeListPage from './features/recipes/RecipeListPage'
import RecipePage from './features/recipes/RecipePage'
import TopBar from './TopBar'

export default function App() {
  return (
    <>
      <TopBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<RecipeListPage/>}/>
          <Route path="recipes/:recipeId" element={<RecipePage/>}/>
        </Routes>
      </div>
    </>
  )
}
