import {LOADING_HIDE, LOADING_SHOW } from '../actions/types'

const InitialState = {
  loading: false
}

export default function triviaReducer(state = InitialState, action) {
  switch (action.type) {
    case LOADING_SHOW: {
      let newstate =  {...state};
      newstate.loading = true
      return newstate;
    }
    case LOADING_HIDE: {
      let newstate =  {...state};
      newstate.loading = false
      return newstate;
    }
    default:
      return state;
  }
}