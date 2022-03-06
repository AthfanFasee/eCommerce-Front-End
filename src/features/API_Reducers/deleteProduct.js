import {createSlice} from '@reduxjs/toolkit';
import {deleteProduct} from '../../api/HomePageAPIs/Delete';


export const productSlice = createSlice({
    name: 'deleteProduct',
    initialState : {value: {
        status: null,
    }},
    extraReducers: {
       [deleteProduct.pending]: (state) => {
           state.value.status = 'loading'
        
       },
       [deleteProduct.fulfilled]: (state) => {
           state.value.status = 'success'
          
       },
    }
})


export default productSlice.reducer;