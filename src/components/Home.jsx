import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slice/countslice';

const Home = () => {

    let data= useSelector((state) => state.count.value)
    
    
    let dispatch = useDispatch()

    let handleIncrement =() =>{
       dispatch(increment())

    
        

    }

    let handleDecrement= () =>{
        dispatch(decrement())
    }
  return (
    <div className='bg-gray-300 h-screen'>
        <div className='flex justify-center items-center gap-5 pt-50 '>
            <button className='text-5xl border px-8 py-2 bg-yellow-50' onClick={handleIncrement}>+</button>
        <div className='text-5xl'>{data}</div>
        <button className='text-5xl border px-8 py-2 bg-yellow-50' onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}

export default Home