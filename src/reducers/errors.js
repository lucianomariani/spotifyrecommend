import {FETCH_PLAYLISTS_ERROR, FETCH_PLAYLIST_TRACKS_ERROR, FETCH_TRACK_ERROR, LOGIN_ERROR} from '../actions/types';
/**
 * I get the loggedIn value from localstorage to check if the user is already logged
 */
const InitialState = {
  access_token: undefined,
  error: false,
  loggedIn: false,
  user: {},
}

export default function loginReducer(state = InitialState, action) {
  switch (action.type) {
    case LOGIN_ERROR: {
      let newstate =  {...state};
      newstate.access_token = {}
      newstate.user = {}
      newstate.loggedIn = false
      newstate.error = true
      return newstate;
    }
    case FETCH_PLAYLISTS_ERROR: {
      let newstate =  {...state};
      newstate.error = true
      newstate.message = action.payload.message
      newstate.status = action.payload.status
      return newstate;
    }  
    case FETCH_PLAYLIST_TRACKS_ERROR: {
      let newstate =  {...state};
      newstate.error = true
      newstate.message = action.payload.message
      newstate.status = action.payload.status
      return newstate;
    } 
    case FETCH_TRACK_ERROR: {
      let newstate =  {...state};
      newstate.error = true
      newstate.message = action.payload.message
      newstate.status = action.payload.status
      return newstate;
    }
    default:
      return state;
  }
}