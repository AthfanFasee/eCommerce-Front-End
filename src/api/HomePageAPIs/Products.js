import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products';


export const getProducts = createAsyncThunk(
    'Posts/getPosts',
    async ({SearchInputValue}) => {
        return await axios.get(`${url}?name=${SearchInputValue}`);
        
    }
)