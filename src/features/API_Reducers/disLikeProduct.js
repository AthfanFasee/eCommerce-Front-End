import {createSlice} from '@reduxjs/toolkit';
import {dislikeProduct} from '../../api/ProductAPIs/DisLikedProduct';


export const productSlice = createSlice({
    name: 'product',
    initialState : {value: {
        dislikedProduct : {},
        status: null,
    }},
    extraReducers: {
       [dislikeProduct.pending]: (state) => {
           state.value.status = 'loading'                
       },
       [dislikeProduct.fulfilled]: (state, {payload}) => {
            state.value.status = 'success'
            state.value.editedProduct = payload.data.product;
       },
    }
})


export default productSlice.reducer;