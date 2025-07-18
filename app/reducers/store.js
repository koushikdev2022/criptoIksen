'use client';

import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducers/AuthSlice';
import PwgnsSlice from '../reducers/PwgnsSlice';
import BlueConnectsSlice from '../reducers/BlueConnectsSlice';
import PlanSlice from '../reducers/PlanSlice'

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        pwg: PwgnsSlice,
        blueConnects: BlueConnectsSlice,
        planst: PlanSlice,
    },
    devTools: process.env.NODE_ENV,
});

export default store;
