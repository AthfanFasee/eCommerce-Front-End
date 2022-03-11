import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products';


export const createProduct = createAsyncThunk(
    'CreateProduct/createProduct',
    async (data, config) => {
        return await axios.post(url, data, config);       
    }
)
