import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriterecipes: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriterecipes.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favoriterecipes = state.favoriterecipes.filter(
                (recipe) => recipe.id !== action.payload
            );
        },
        toggleFavorite: (state, action) => {
            const exists = state.favoriterecipes.some(
                (recipe) => recipe.idFood === action.payload.idFood
            );
            if (exists) {
                state.favoriterecipes = state.favoriterecipes.filter(
                    (recipe) => recipe.idFood !== action.payload.idFood
                );
            } else {
                state.favoriterecipes.push(action.payload);
            }
        },
    },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;