import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    phone: "",
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setPhoneNumber } = authenticationSlice.actions,
  phone = (state) => state.authentication.phone;
export default authenticationSlice.reducer;
