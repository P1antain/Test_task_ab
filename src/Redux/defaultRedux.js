import { createSlice } from "@reduxjs/toolkit";

export const DefaultRedux = createSlice({
  name: "defaultValues",
  initialState: {
    users: [],
    diagram: []
  },
  reducers: {
    getUser(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    newUser(state, action) {
      const initialId = state.users.length
      state.users.push({
        id: initialId + 1,
        data: action.payload,
      });
    },
    getDiagram(state, action){
      return{
        ...state,
        diagram: action.payload
      }
    }
  },
});

export const { getUser, newUser , getDiagram} = DefaultRedux.actions;

export default DefaultRedux.reducer;
