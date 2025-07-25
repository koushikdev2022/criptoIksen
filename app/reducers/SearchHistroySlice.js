import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const getSearchHistory = createAsyncThunk(
    'getSearchHistory',
    async ({week = 0 }, { rejectWithValue }) => {
        try {
            const response = await api.get(`user/user-search-manage/sidebar?days=7&week=${week}&limit=10`);
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

export const getSearchHistoryDetails = createAsyncThunk(
    'getSearchHistoryDetails',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`user/user-search-manage/details`,user_input);
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
    historyData: [],
    singleHistory:{},
    pagination: {
    current_week: 0,
    has_next: false,
  },
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
                    // state.historyData = payload
                const newItems = payload.data?.search_history || [];
  state.searchHistory = [...(state.searchHistory || []), ...newItems];

  state.pagination = payload.data?.pagination?.navigation || {
    has_next: false,
    previous_week: 0,
    next_week: 0
  };
                    state.error = false
                })
                .addCase(getSearchHistory.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getSearchHistoryDetails.pending,(state)=>{
                    state.loading=true
                })
                .addCase(getSearchHistoryDetails.fulfilled,(state,{payload})=>{
                    state.loading=false
                    state.singleHistory=payload;
                    state.error=false
                })
                .addCase(getSearchHistoryDetails.rejected,(state,{payload})=>{
                    state.loading=false
                    state.error=payload
                })
        }

    }
)
export default SearchHistroySlice.reducer;