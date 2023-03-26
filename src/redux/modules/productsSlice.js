import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  isLoading: false,
  error: null,
}
// ${process.env.REACT_APP_SERVER_URL}

// 게시물 작성 함수
export const __addProducts = createAsyncThunk(
  '__addProducts',
  async (payload, thunkAPI) => {
    console.log('서버에보내는 값', payload.products)
    try {
      await axios.post(`http://localhost:4000/products`, payload.products)
      return thunkAPI.fulfillWithValue(payload.products)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 게시물 조회 함수
export const __getProducts = createAsyncThunk(
  '__getProducts',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:4000/products`)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    // 게시물 작성 Reducer -------------------------------
    [__addProducts.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.products = [...state.products, action.payload]
    },
    [__addProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 게시물 조회 Reducer -------------------------------
    [__getProducts.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.products = action.payload
    },
    [__getProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const {} = productsSlice.actions
export default productsSlice.reducer