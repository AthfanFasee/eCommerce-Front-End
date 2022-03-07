import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url = 'http://localhost:4000/api/v1/products/dislike';


export const dislikeProduct = createAsyncThunk(
    'DislikeProduct/dislikeProduct',
    async ({ProductID}) => {
        return await axios.patch(`${url}/${ProductID}`);       
    }
)