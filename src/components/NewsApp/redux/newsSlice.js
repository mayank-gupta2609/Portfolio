import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category:'general'
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setSection: (state, action) => {
            state.category = action.payload
        } 
    }
})

export const { setSection } = newsSlice.actions

export default newsSlice.reducer;