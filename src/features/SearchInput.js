import {createSlice} from '@reduxjs/toolkit';

export const SearchInputSlice = createSlice({
    name: 'SearchInput',
    initialState : {value: ""},
    reducers: {
        UpdateSearchInput: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {UpdateSearchInput} = SearchInputSlice.actions;
export default SearchInputSlice.reducer;