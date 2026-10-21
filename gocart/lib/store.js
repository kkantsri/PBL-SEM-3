import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from './features/booking/bookingSlice'
import searchReducer from './features/search/searchSlice'
import reviewReducer from './features/review/reviewSlice'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/productSlice'
import addressReducer from './features/address/addressSlice'
import ratingReducer from './features/rating/ratingSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            booking: bookingReducer,
            search: searchReducer,
            review: reviewReducer,
            cart: cartReducer,
            product: productReducer,
            address: addressReducer,
            rating: ratingReducer,
        },
    })
}
