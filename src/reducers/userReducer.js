import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: '',
}

export const usersData = createAsyncThunk('usersdata', async (currentPage) => {
    const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
    return await res.json();
});

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [usersData.pending]: (state, action) => {
            state.loading = true;
        },
        [usersData.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.users = [action.payload];
            }
        },
    }
});

export default userReducer.reducer;