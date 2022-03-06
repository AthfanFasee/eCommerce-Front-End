import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products';


export const createProduct = createAsyncThunk(
    'CreateProduct/createProduct',
    async ({name, SKU, description, Quantity}) => {
        return await axios.post(url, {name, SKU, description, Quantity});       
    }
)
