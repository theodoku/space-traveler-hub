import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
};

const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const resp = await axios.get(URL);
    const { data } = resp;
    return data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.ricket_name,
      description: rocket.description,
      image: rocket.flicker_images[0],
      reserved: false,
    }));
  } catch (error) {
    return error.message;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        rockets: action.payload,
      }))
      .addCase(rocketsSlice.actions.reserveRocket, (state, action) => {
        const updatedRockets = state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        });
        return { ...state, rockets: updatedRockets };
      })
      .addCase(rocketsSlice.actions.cancelReservation, (state, action) => {
        const updatedRockets = state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        });
        return { ...state, rockets: updatedRockets };
      });
  },
});

export default rocketsSlice.reducer;
