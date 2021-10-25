import { createSlice } from "@reduxjs/toolkit";

export const DefaultRedux = createSlice({
  name: "defaultValues",
  initialState: {
    users: [],
    diagram: [],
    registeredUsers: 0,
    realUser: 0,
  },
  reducers: {
    getUser(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    newUser(state, action) {
      const initialId = state.users.length;
      state.users.push({
        id: initialId + 1,
        data: action.payload,
      });
    },
    getDiagram(state, action) {
      return {
        ...state,
        diagram: action.payload,
      };
    },
    getRegisteredUsers(state, action) {
      return {
        ...state,
        registeredUsers: action.payload,
      };
    },
    getRealUser(state, action) {
      return {
        ...state,
        realUser: action.payload,
      };
    },
  },
});

export const { getUser, newUser, getDiagram, getRegisteredUsers, getRealUser } =
  DefaultRedux.actions;

export default DefaultRedux.reducer;
