import { createSlice } from "@reduxjs/toolkit";

export const DefaultRedux = createSlice({
  name: "defaultValues",
  initialState: {
    users: [],
    diagram: [],
    allUserFromCount: []
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
    },
    allUserFromCount(state, action){
      return{
        ...state,
        allUserFromCount: action.payload
      }
    }
  },
});

export const { getUser, newUser , getDiagram, allUserFromCount} = DefaultRedux.actions;

export default DefaultRedux.reducer;
