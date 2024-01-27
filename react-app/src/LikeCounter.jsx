import React from 'react'
import Reducer from './Redux/Reducer'
import { incrementLike,decrementLike} from './Redux/Actions'
import { Provider,useDispatch,useSelector } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer : Reducer
})

function LikeCounter() {

  const likes = useSelector(state => state.likes)

  const dispatch = useDispatch()

  return (
    <>
        <h2>LIKES COUNTER {likes}</h2>
        <button onClick={() => dispatch(incrementLike())}>INCREMENT</button>
        <button onClick={() => dispatch(decrementLike())}>DECREMENT</button>
    </>
  )
}

const LikeCounterApp = () => {
  return (
    <Provider store={store}>
      <LikeCounter/>
    </Provider>
  )
}

export default LikeCounterApp