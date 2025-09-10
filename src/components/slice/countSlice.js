import { createSlice } from '@reduxjs/toolkit'


const initialState={
    value: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
     if(state.value >0) {
      state.value -=1

     }
      
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = countSlice.actions

export default countSlice.reducer