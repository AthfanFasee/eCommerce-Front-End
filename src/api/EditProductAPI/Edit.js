import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products';


export const editProduct = createAsyncThunk(
    'EditProduct/editProduct',
    async ({ProductID, EditInputValues}) => {
        console.log(EditInputValues)
        return await axios.patch(`${url}/${ProductID}`, {name: EditInputValues.name, SKU: EditInputValues.SKU, description: EditInputValues.description, Quantity: EditInputValues.Quantity});       
    }
)
