import {createSlice} from '@reduxjs/toolkit';

const initialStateValues = { name: "", SKU: "", description: "", Quantity: 0}

export const EditSlice = createSlice({
    name: 'EditInputs',
    //to save data of update post input elements
    initialState : { value: initialStateValues},  
    reducers: {
        EditInputValue: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {EditInputValue} = EditSlice.actions;
export default EditSlice.reducer;