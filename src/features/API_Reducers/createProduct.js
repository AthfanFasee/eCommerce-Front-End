import {createSlice} from '@reduxjs/toolkit';
import {createProduct} from '../../api/CreateProductAPIS/Create';


export const productSlice = createSlice({
    name: 'product',
    initialState : {value: {
        status: null,
    }},
    extraReducers: {
       [createProduct.pending]: (state) => {
           state.value.status = 'loading'
        
       },
       [createProduct.fulfilled]: (state) => {
           state.value.status = 'success'
          
       },
    }
})


export default productSlice.reducer;