import {createSlice} from '@reduxjs/toolkit';
import {likeProduct} from '../../api/ProductAPIs/LikeProduct';


export const productSlice = createSlice({
    name: 'product',
    initialState : {value: {
        likedProduct : {},
        status: null,
    }},
    extraReducers: {
       [likeProduct.pending]: (state) => {
           state.value.status = 'loading'                
       },
       [likeProduct.fulfilled]: (state, {payload}) => {
            state.value.status = 'success'
            state.value.editedProduct = payload.data.product;
       },
    }
})


export default productSlice.reducer;