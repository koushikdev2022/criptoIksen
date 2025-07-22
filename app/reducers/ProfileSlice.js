import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';


export const getProfile = createAsyncThunk(
    'getProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/user/user-profile/info');
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
const initialState = {
    loading: false,
    profileData: [],
    error: false
}
const ProfileSlice = createSlice(
    {
        name: 'prof',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(getProfile.pending, (state) => {
                    state.loading = true
                })
                .addCase(getProfile.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.profileData = payload
                    state.error = false
                })
                .addCase(getProfile.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }
    }
)
export default ProfileSlice.reducer