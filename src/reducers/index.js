import { combineReducers } from 'redux';
import playlists from './playlists';
import login from './login';
import errors from './errors';
import loadings from './loadings';

export default combineReducers({
    playlists: playlists,
    login: login,
    errors: errors,
    loadings: loadings

});