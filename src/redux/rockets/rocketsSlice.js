import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const resp = await axios.get(URL);
    const { data } = resp;
    return data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
  } catch (error) {
    return error.message;
  }
});

export const reserveRocket = createAsyncThunk(
  'rockets/reserveRocket',
  async (id) => {
    try {
      await axios.post(`${URL}/${id}/reserve`);
      return id;
    } catch (error) {
      return error.message;
    }
  },
);

export const cancelReservation = createAsyncThunk(
  'rockets/cancelReservation',
  async (id) => {
    try {
      await axios.delete(`${URL}/${id}/reservations`);
      return id;
    } catch (error) {
      return error.message;
    }
  },
);

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
      .addCase(reserveRocket.fulfilled, (state, action) => {
        const rocket = state.rockets.find(
          (rocket) => rocket.id === action.payload,
        );
        if (rocket) {
          return {
            ...state,
            rockets: state.rockets.map((rocket) => (rocket.id === action.payload
              ? { ...rocket, reserved: true }
              : rocket)),
          };
        }
        return state;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        const rocket = state.rockets.find(
          (rocket) => rocket.id === action.payload,
        );
        if (rocket) {
          return {
            ...state,
            rockets: state.rockets.map((rocket) => (rocket.id === action.payload
              ? { ...rocket, reserved: false }
              : rocket)),
          };
        }
        return state;
      });
  },
});

export default rocketsSlice.reducer;
