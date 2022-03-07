import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products/like';


export const likeProduct = createAsyncThunk(
    'LikeProduct/likeProduct',
    async ({ProductID}) => {
        return await axios.patch(`${url}/${ProductID}`);       
    }
)
