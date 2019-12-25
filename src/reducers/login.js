import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions/types';
/**
 * I get the loggedIn value from localstorage to check if the user is already logged
 */
const InitialState = {
  access_token: {},
  loggedIn: false,
  user: {},
}

export default function loginReducer(state = InitialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      let newstate =  {...state};
      newstate.access_token = action.access_token
      newstate.user = action.payload
      newstate.loggedIn = true
      return newstate;
    }
    case LOGOUT_SUCCESS: {
      let newstate =  {...state};
      newstate.access_token = {}
      newstate.user = {}
      newstate.loggedIn = false
      return newstate;
    }  
   
    default:
      return state;
  }
}