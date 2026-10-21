import { createSlice } from "@reduxjs/toolkit";
import { sampleReviews } from "@/assets/busData";

const initialState = {
  reviews: sampleReviews || [],
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.unshift(action.payload);
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { addReview, setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
