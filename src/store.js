import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './components/slice/counterSlice'

export default configureStore({
  reducer: {
    count:counterSlice
  }
})