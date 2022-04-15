import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
	name: "token",
	initialState: {
		accessToken: "",
	},
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		clearAccessToken: (state) => {
			state.accessToken = "";
		},
	},
});

export const { setAccessToken, clearAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
