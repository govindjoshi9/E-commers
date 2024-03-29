import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters } from "./ProductApi";

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchAllProductByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({filter, sort}) => {
    const response = await fetchProductsByFilters(filter,sort);
    // console.log(response)
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;


export default productSlice.reducer;
