import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const fetchLastFilms = createAsyncThunk('films/Last', async () => {
  const { data } = await axios.get('/lastFilms');
  return data;
});

const initialState = {
  lastFilms: {
    items: [],
    status: 'loading',
  },
};

const filmsReducer = createSlice({
  name: 'HomeFilms',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLastFilms.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchLastFilms.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.lastFilms.items = action.payload;
    },
    [fetchLastFilms.rejected]: (state, action) => {
      state.status = 'error';
      state.lastFilms.items = [];
    },
  },
});

export const filmsHome = filmsReducer.reducer;
