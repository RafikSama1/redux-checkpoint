import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        cart: cartSlice
    }
  })
}