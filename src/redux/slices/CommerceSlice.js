import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Api Calls
export const fetchProducts = createAsyncThunk(
  "CommerceSlice/fetchProducts",
  async () => {
    const data = await fetch(" http://localhost:3000/products").then(
      (response) => response.json()
    );
    return data;
  }
);

export const fetchCategories = createAsyncThunk(
  "CommerceSlice/fetchCategories",
  async () => {
    const data = await fetch(" http://localhost:3000/categories").then(
      (response) => response.json()
    );
    return data;
  }
);

const CommerceSlice = createSlice({
  name: "CommerceSlice",
  initialState: {
    Categories: [],
    Products: [],
    ShownProducts: [],
    SelectedCategory: "",
    SelectedProduct: "",
  },
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.SelectedCategory = action.payload;
    },
    updateShownProducts: (state) => {
      state.ShownProducts = state.SelectedCategory
        ? state.Products.filter(
            (i) => i.category_name == state.SelectedCategory
          )
        : state.Products;
    },
    updateSelectedProduct: (state, action) => {
      state.SelectedProduct = state.Products.find(
        (i) => i.id === action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, () => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.Products = action.payload;
        state.ShownProducts = state.SelectedCategory
          ? state.Products.filter(
              (i) => i.category_name == state.SelectedCategory
            )
          : state.Products;
      })
      .addCase(fetchProducts.rejected, () => {})
      .addCase(fetchCategories.pending, () => {})
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.Categories = action.payload;
      })
      .addCase(fetchCategories.rejected, () => {}),
});

export const {
  updateSelectedCategory,
  updateShownProducts,
  updateSelectedProduct,
} = CommerceSlice.actions;
export default CommerceSlice.reducer;
