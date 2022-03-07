import {createSlice} from '@reduxjs/toolkit';

export const isLikedSlice = createSlice({
    name: 'update',
    //to save the if the product is already liked or not (Used while querying favrt products)
    initialState : {value: "false"},
    reducers: {
        updateIsLiked: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {updateIsLiked} = isLikedSlice.actions;
export default isLikedSlice.reducer;