import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMission = createAsyncThunk('mission/getMission', async () => {
  try {
    const resp = await axios.get(url);
    const { data } = resp;

    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  mission: [],
  isLoading: false,
  error: undefined,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMission.pending, (state) => {
        console.log('getMission.pending');
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getMission.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          mission: action.payload,
          isLoading: false,
        };
      })
      .addCase(getMission.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default missionSlice.reducer;
