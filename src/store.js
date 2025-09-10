import { configureStore } from '@reduxjs/toolkit'
import  countSlice  from './components/slice/countslice'

export default configureStore({
  reducer: {
    count:countSlice
  }
})