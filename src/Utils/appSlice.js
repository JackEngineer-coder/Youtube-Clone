import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState:{
          menu: true,

    },
    reducers:{
      toggleMenu:(state)=>{
     state.menu = !state.menu
      }
    }
})
export const {toggleMenu} = appSlice.actions
export default appSlice.reducer