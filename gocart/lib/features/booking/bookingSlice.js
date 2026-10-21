import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTrip: null,
  selectedSeats: [], // Array of seat numbers strings, e.g. ["1A", "1B"]
  passengers: [], // Array of { name, age, gender, seatNo }
  boardingPoint: null,
  droppingPoint: null,
  coupon: null,
  baseFare: 0,
  discount: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  const seatCount = state.selectedSeats.length;
  const pricePerSeat = state.selectedTrip?.price || 0;
  state.baseFare = seatCount * pricePerSeat;
  if (state.coupon) {
    state.discount = Math.round((state.baseFare * state.coupon.discount) / 100);
  } else {
    state.discount = 0;
  }
  state.totalAmount = Math.max(0, state.baseFare - state.discount);
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
      state.selectedSeats = [];
      state.passengers = [];
      state.boardingPoint = action.payload?.boardingPoints?.[0]?.name || null;
      state.droppingPoint = action.payload?.droppingPoints?.[0]?.name || null;
      state.coupon = null;
      calculateTotals(state);
    },
    toggleSeat: (state, action) => {
      const seatNo = action.payload;
      const index = state.selectedSeats.indexOf(seatNo);
      if (index >= 0) {
        state.selectedSeats.splice(index, 1);
        state.passengers = state.passengers.filter((p) => p.seatNo !== seatNo);
      } else {
        state.selectedSeats.push(seatNo);
        state.passengers.push({
          name: "",
          age: "",
          gender: "Male",
          seatNo: seatNo,
        });
      }
      calculateTotals(state);
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
    updatePassenger: (state, action) => {
      const { index, field, value } = action.payload;
      if (state.passengers[index]) {
        state.passengers[index][field] = value;
      }
    },
    setBoardingPoint: (state, action) => {
      state.boardingPoint = action.payload;
    },
    setDroppingPoint: (state, action) => {
      state.droppingPoint = action.payload;
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      calculateTotals(state);
    },
    removeCoupon: (state) => {
      state.coupon = null;
      calculateTotals(state);
    },
    clearBooking: () => initialState,
  },
});

export const {
  setSelectedTrip,
  toggleSeat,
  setPassengers,
  updatePassenger,
  setBoardingPoint,
  setDroppingPoint,
  applyCoupon,
  removeCoupon,
  clearBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
