import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Api Calls

export const fetchUsers = createAsyncThunk("UserSlice/fetchUsers", async () => {
  const data = await fetch(" http://localhost:3000/users").then((response) =>
    response.json()
  );
  return data;
});

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    currentUser: null,
    users: [],
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCartItem: (state, action) => {
      state.currentUser.basket = state.currentUser.basket.filter(
        (i) => i.id != action.payload
      );
    },
    addCartItem: (state, action) => {
      state.currentUser.basket.push(action.payload);
    },
    favoriteMethod: (state, action) => {
      if (
        state.currentUser.favorited_items.find((i) => i.id == action.payload.id)
      ) {
        state.currentUser.favorited_items =
          state.currentUser.favorited_items.filter(
            (i) => i.id != action.payload.id
          );
      } else {
        state.currentUser.favorited_items.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchUsers.pending, () => {})
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, () => {}),
});

export const {
  updateCurrentUser,
  removeCartItem,
  addCartItem,
  favoriteMethod,
} = UserSlice.actions;
export default UserSlice.reducer;
