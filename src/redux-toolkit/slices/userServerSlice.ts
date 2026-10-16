import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../interfaces/IUser";

const initialState = {
  users: [] as IUser[],
};

export const getUsers: any = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      dispatch(setUsers(res.data));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser: any = createAsyncThunk(
  "user/addUser",
  async (user: IUser, { dispatch, rejectWithValue }) => {
    try {
      await axios.post("http://localhost:3000/users", user);
      dispatch(getUsers());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeUser: any = createAsyncThunk(
  "user/removeUser",
  async (id: string, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      dispatch(getUsers());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeStatus: any = createAsyncThunk(
  "user/changeStatus",
  async (user: IUser, { dispatch, rejectWithValue }) => {
    try {
      await axios.patch(`http://localhost:3000/users/${user.id}`, {
        isActive: !user.isActive,
      });
      dispatch(getUsers());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userServerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userServerSlice.actions;

export default userServerSlice.reducer;
