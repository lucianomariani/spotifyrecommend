import {FETCH_PLAYLIST_TRACKS_SUCCESS,FETCH_PLAYLISTS_RESET, FETCH_PLAYLISTS_SUCCESS, FETCH_TRACK_SUCCESS } from '../actions/types'

const InitialState = {
  playlists: {},
  tracks: {}
}

export default function triviaReducer(state = InitialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS: {
      let newstate =  {...state};
      newstate.playlists = action.payload
      return newstate;
    }
    case FETCH_PLAYLISTS_RESET: {
      let newstate =  {...state};
      newstate.playlists = {}
      newstate.tracks = {}
      return newstate;
    }
    case FETCH_PLAYLIST_TRACKS_SUCCESS: {
      let newstate =  {...state};
      newstate.tracks = action.payload
      return newstate;
    }
  
    case FETCH_TRACK_SUCCESS: {
      let newstate =  {...state};
      newstate.track = action.payload
      return newstate;
    }
    default:
      return state;
  }
}