import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products';


export const deleteProduct = createAsyncThunk(
    'DeleteProduct/deleteProduct',
    async ({ProductID}) => {
        return await axios.delete(`${url}/${ProductID}`);       
    }
)
