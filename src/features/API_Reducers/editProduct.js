import {createSlice} from '@reduxjs/toolkit';
import {editProduct} from '../../api/EditProductAPI/Edit';


export const productSlice = createSlice({
    name: 'product',
    initialState : {value: {
        editedProduct : {},
        status: null,
    }},
    extraReducers: {
       [editProduct.pending]: (state) => {
           state.value.status = 'loading'
           console.log('Loading')
          
       },
       [editProduct.fulfilled]: (state, {payload}) => {
            state.value.status = 'success'
            state.value.editedProduct = payload.data.product;
            console.log(payload.data.product)
       },
    }
})


export default productSlice.reducer;