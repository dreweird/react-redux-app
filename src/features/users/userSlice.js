import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/users')
  return response.json();
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer