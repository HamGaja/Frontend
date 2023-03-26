import { configureStore } from '@reduxjs/toolkit'
import itemSlice from '../modules/itemSlice'
import productsSlice from '../modules/productsSlice'

const store = configureStore({
  reducer: {
    item: itemSlice,
    products: productsSlice,
  },
})

export default store
