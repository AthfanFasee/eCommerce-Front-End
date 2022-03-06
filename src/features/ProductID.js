import {createSlice} from '@reduxjs/toolkit';

export const postIDSlice = createSlice({
    name: 'update',
    //to save the curren post's ID (Used while updating the post)
    initialState : {value: ""},
    reducers: {
        updateProductID: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {updateProductID} = postIDSlice.actions;
export default postIDSlice.reducer;