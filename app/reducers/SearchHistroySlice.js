import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const getSearchHistory = createAsyncThunk(
    'getSearchHistory',
    async ({ page, limit }, { rejectWithValue }) => {
        try {
            const response = await api.get(`user/user-search-manage/list?page=${page}&limit=${limit}`);
            if (response?.data?.status_code === 201) {
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
    historyData: [],
    error: false
}
const SearchHistroySlice = createSlice(
    {
        name: "history",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getSearchHistory.pending, (state) => {
                state.loading = true
            })
                .addCase(getSearchHistory.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.historyData = payload
                    state.error = false
                })
                .addCase(getSearchHistory.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }

    }
)
export default SearchHistroySlice.reducer;