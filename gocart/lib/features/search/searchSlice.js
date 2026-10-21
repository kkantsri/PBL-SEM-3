import { createSlice } from "@reduxjs/toolkit";
import { busTrips } from "@/assets/busData";

const initialState = {
  from: "Delhi",
  to: "Jaipur",
  date: "2026-10-23",
  allTrips: busTrips || [],
  results: busTrips ? busTrips.filter((t) => t.sourceCity === "Delhi" && t.destCity === "Jaipur") : [],
  filters: {
    busType: "All",
    departureTime: "All", // "All", "Before 6 AM", "6 AM - 12 PM", "12 PM - 6 PM", "After 6 PM"
    maxPrice: 3000,
    operator: "All",
    minRating: 0,
  },
  sortBy: "price_asc", // "price_asc", "price_desc", "duration_asc", "rating_desc"
  isLoading: false,
};

const filterAndSortTrips = (trips, from, to, filters, sortBy) => {
  let list = trips;
  if (from) {
    list = list.filter((t) => t.sourceCity.toLowerCase() === from.toLowerCase());
  }
  if (to) {
    list = list.filter((t) => t.destCity.toLowerCase() === to.toLowerCase());
  }
  if (filters.busType && filters.busType !== "All") {
    list = list.filter((t) => t.busType.toLowerCase().includes(filters.busType.toLowerCase()));
  }
  if (filters.operator && filters.operator !== "All") {
    list = list.filter((t) => t.operatorName.toLowerCase() === filters.operator.toLowerCase());
  }
  if (filters.maxPrice) {
    list = list.filter((t) => t.price <= filters.maxPrice);
  }
  if (filters.minRating > 0) {
    list = list.filter((t) => t.rating >= filters.minRating);
  }

  // Sort
  if (sortBy === "price_asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating_desc") {
    list = [...list].sort((a, b) => b.rating - a.rating);
  }
  return list;
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      const { from, to, date } = action.payload;
      if (from !== undefined) state.from = from;
      if (to !== undefined) state.to = to;
      if (date !== undefined) state.date = date;
      state.results = filterAndSortTrips(state.allTrips, state.from, state.to, state.filters, state.sortBy);
    },
    swapCities: (state) => {
      const temp = state.from;
      state.from = state.to;
      state.to = temp;
      state.results = filterAndSortTrips(state.allTrips, state.from, state.to, state.filters, state.sortBy);
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
      state.results = filterAndSortTrips(state.allTrips, state.from, state.to, state.filters, state.sortBy);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.results = filterAndSortTrips(state.allTrips, state.from, state.to, state.filters, state.sortBy);
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.sortBy = initialState.sortBy;
      state.results = filterAndSortTrips(state.allTrips, state.from, state.to, state.filters, state.sortBy);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setSearchParams,
  swapCities,
  setFilter,
  setSortBy,
  clearFilters,
  setLoading,
} = searchSlice.actions;

export default searchSlice.reducer;
