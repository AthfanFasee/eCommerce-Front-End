import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../../api/HomePageAPIs/Products';


export const productsSlice = createSlice({
    name: 'products',
    initialState : {value: {
        products: [],
        noOfPages: 0,
        status: null,
    }},
    extraReducers: {
       [getProducts.pending]: (state) => {
           state.value.status = 'loading'
       },
       [getProducts.fulfilled]: (state, {payload}) => {
           state.value.products = payload.data.products
           state.value.noOfPages = payload.data.noOfPages
           state.value.status = 'success'
       },
       [getProducts.rejected]: (state) => {
            state.value.status = 'failed'     
       }
    }
})


export default productsSlice.reducer;