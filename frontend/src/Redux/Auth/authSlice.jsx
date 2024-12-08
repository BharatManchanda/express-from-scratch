import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { setAccessToken } from '../../API';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

// Thunks
export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const response = await api.auth.register(data.payload);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const response = await api.auth.login(data.payload);
        localStorage.setItem("token", response.data.token);
        setAccessToken(response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        data.navigate('/');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const logout = createAsyncThunk('auth/logout', async (data, { rejectWithValue }) => {
    try {
        const response = await api.auth.logout(data.payload);
        localStorage.clear();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getMe = createAsyncThunk('auth/get-me', async (data, { rejectWithValue }) => {
    try {
        const response = await api.auth.getMe(data.payload);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(logout.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMe.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(getMe.rejected, (state) => {
                state.isLoading = false;
            })
    },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
