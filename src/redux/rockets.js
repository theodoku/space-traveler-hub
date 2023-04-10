import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    fetchRockets: (state, action) => (state.length === 0 ? action.payload : state),
    reserveRocket: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.id) return rocket;
      return { ...rocket, reserved: true };
    }),
    cancelReservation: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.id) return rocket;
      return { ...rocket, reserved: false };
    }),
  },
});

export const { fetchRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
