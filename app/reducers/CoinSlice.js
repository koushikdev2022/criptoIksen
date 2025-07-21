'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getCoins = createAsyncThunk(
    'getCoins',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            console.log(response, "response Coins");

            if (response?.status === 200) {
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
);

export const getCoinsDetails = createAsyncThunk(
    'getCoinsDetails',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://n8nnode.bestworks.cloud/webhook/crypto', user_input);
            console.log(response, "response Coins");

            if (response?.status === 200) {
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
);


const initialState = {
    loading: false,
    error: false,
    coins: [],
    coinsDatas: []
}
const CoinSlice = createSlice(
    {
        name: 'coin',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getCoins.pending, (state) => {
                state.loading = true
            })
                .addCase(getCoins.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.coins = payload
                    state.error = false
                })
                .addCase(getCoins.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getCoinsDetails.pending, (state) => {
                    state.loading = true
                })
                .addCase(getCoinsDetails.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.coinsDatas = payload
                    state.error = false
                })
                .addCase(getCoinsDetails.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }
    }
)
export default CoinSlice.reducer