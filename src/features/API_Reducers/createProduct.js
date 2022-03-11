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
           console.log(state.value.status)
        
       },
       [createProduct.fulfilled]: (state, {payload}) => {
           state.value.status = 'success'
           console.log(state.value.status)
           console.log(payload.data)
       },
    }
})


export default productSlice.reducer;