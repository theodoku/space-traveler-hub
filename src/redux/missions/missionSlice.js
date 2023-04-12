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
  reducers: {
    missionAdded(state, action) {
      const newArr = state.mission.concat(action.payload);
      return { ...state, mission: newArr };
    },
    reserveMission(state, action) {
      const id = action.payload;
      const newArr = state.mission.map((item) => {
        if (item.mission_id === id) {
          return { ...item, reserved: true };
        }
        return item;
      });
      return { ...state, mission: newArr };
    },
    leaveMission(state, action) {
      const id = action.payload;
      const newArr = state.mission.map((item) => {
        if (item.mission_id === id) {
          return { ...item, reserved: false };
        }
        return item;
      });
      return { ...state, mission: newArr };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMission.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getMission.fulfilled, (state, action) => ({
        ...state,
        mission: action.payload,
        isLoading: false,
      }))
      .addCase(getMission.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});
export const { missionAdded, reserveMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
