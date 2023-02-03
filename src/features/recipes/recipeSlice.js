import { createSlice } from "@reduxjs/toolkit";
import { TEST_RECIPES } from "../../FAKE_DATA";
import { v4 as uuid } from "uuid"

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipeList: TEST_RECIPES
    },
    reducers: {
        addRecipe: (state, action) => { // payload should be recipe data object
            const newRecipe = {
                id: uuid(),
                ...action.payload
            }
            state.recipeList.push(newRecipe)
        },
        deleteRecipe: (state, action) => {
            state.recipeList = state.recipeList.filter(recipe => recipe.id !== action.payload)
        }
    }
})

export const recipeReducer = recipeSlice.reducer
export const { addRecipe, deleteRecipe } = recipeSlice.actions