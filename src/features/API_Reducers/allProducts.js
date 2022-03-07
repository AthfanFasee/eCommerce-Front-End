import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../../api/HomePageAPIs/Products';


export const productsSlice = createSlice({
    name: 'products',
    initialState : {value: {
        products: [],
        noOfProducts: 0,
        status: null,
    }},
    extraReducers: {
       [getProducts.pending]: (state) => {
           state.value.status = 'loading'
       },
       [getProducts.fulfilled]: (state, {payload}) => {
           state.value.products = payload.data.products
           state.value.noOfProducts = payload.data.noOfProducts
           state.value.status = 'success'
       },
       [getProducts.rejected]: (state) => {
            state.value.status = 'failed'     
       }
    }
})


export default productsSlice.reducer;