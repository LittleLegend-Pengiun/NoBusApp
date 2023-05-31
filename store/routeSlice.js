import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: "",
  end: "",
  addToStart: true,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    switchStart: (state) => {
      state.addToStart = true;
    },
    switchEnd: (state) => {
      state.addToStart = false;
    },
    setValue: (state, action) => {
      if (state.addToStart) state.start = action.payload;
      else state.end = action.payload;
    },
    reverseValue: (state) => {
      const temp = state.start;
      state.start = state.end;
      state.end = temp;
    },
    clearAllRoute: (state) => {
      state.start = ""
      state.end = ""
    }
  },
});

export const { switchStart, switchEnd, setValue, reverseValue, clearAllRoute } = routeSlice.actions;

export const startValue = (state) => state.route.start;
export const endValue = (state) => state.route.end;

export default routeSlice.reducer;
