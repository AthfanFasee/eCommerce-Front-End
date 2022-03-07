import {createSlice} from '@reduxjs/toolkit';

export const postIDSlice = createSlice({
    name: 'update',
    //to save the curren products's ID (Used while editing the product)
    initialState : {value: ""},
    reducers: {
        updateProductID: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {updateProductID} = postIDSlice.actions;
export default postIDSlice.reducer;