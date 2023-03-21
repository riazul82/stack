import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    loading: false,
    error: '',
}

export const signupUser = createAsyncThunk('signupuser', async (data) => {
    const res = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return await res.json();
});

export const signinUser = createAsyncThunk('signinuser', async (data) => {
    const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return await res.json();
});

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        removeError: (state, action) => {
            state.error = '';
        },
        logoutUser: (state, action) => {
            state.token = '';
            localStorage.removeItem('token');
        }
    },
    extraReducers: {
        // signup
        [signupUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signupUser.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.token = action.payload.token;
                localStorage.setItem('token', state.token);
            }
        },

        // signin
        [signinUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signinUser.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.token = action.payload.token;
                localStorage.setItem('token', state.token);
            }
        }
    }
});

export const { addToken, removeError, logoutUser } = authReducer.actions;
export default authReducer.reducer;