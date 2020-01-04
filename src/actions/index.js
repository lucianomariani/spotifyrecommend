import {LOADING_HIDE, LOADING_SHOW, FETCH_PLAYLIST_TRACKS_SUCCESS,FETCH_PLAYLISTS_RESET, FETCH_PLAYLIST_TRACKS_ERROR,  FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_ERROR, FETCH_TRACK_SUCCESS, FETCH_TRACK_ERROR, LOGIN_SUCCESS,LOGIN_ERROR, LOGOUT_SUCCESS } from './types'


export const fetchPlaylists = () => {
  const TOKEN = localStorage.getItem('access_token')
  const COUNTRY = localStorage.getItem('country') 
  const URL = `/api/browse/featured-playlists?country=${COUNTRY}`
  return(dispatch) => {
    dispatch(loadingShow())
    fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(fetchPlaylistsError(data.error))
          dispatch(loadingHide())
        }else{
          dispatch(fetchPlaylistsSuccess(data))
          dispatch(loadingHide())
        }
      })
      .catch(err => {
          dispatch(fetchPlaylistsError(err.message))
          dispatch(loadingHide())
      });
  }
}

export const fetchPlaylistsSuccess =  (data) => {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: data.playlists 
  }
};

export const fetchPlaylistsError =  (error) => {
  return {
    type: FETCH_PLAYLISTS_ERROR,
    payload: error
  }
};

export const fetchPlaylistReset =  () => {
  return {
    type: FETCH_PLAYLISTS_RESET
  }
};

export const fetchPlaylistTracks = (playlistId) => {
  const TOKEN = localStorage.getItem('access_token')
  const URL = `/api/playlists/${playlistId}/tracks`
  return(dispatch) => {
    dispatch(loadingShow())
    fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      })
      .then(res => res.json())
      .then(data => { 
        if (data.error) {
          dispatch(fetchPlaylistTracksError(data.error))
          dispatch(loadingHide())
        }else{
          dispatch(fetchPlaylistTracksSuccess(data))
          dispatch(loadingHide())
        }
      })
      .catch(err => {
          dispatch(fetchPlaylistTracksError(err.message))
          dispatch(loadingHide())
      });
  }
}
export const fetchPlaylistTracksSuccess =  (data) => {
  return {
    type: FETCH_PLAYLIST_TRACKS_SUCCESS,
    payload: data 
  }
};

export const fetchPlaylistTracksError =  (error) => {
  return {
    type: FETCH_PLAYLIST_TRACKS_ERROR,
    payload: error
  }
};


export const fetchTrack = (trackId) => {
  const URL = `/api/v1/tracks/${trackId}`
  const TOKEN = localStorage.getItem('access_token')
  return(dispatch) => {
    dispatch(loadingShow())
    fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(fetchTrackError(data.error))
          dispatch(loadingHide())
        }else{
          dispatch(fetchTrackSuccess(data))
          dispatch(loadingHide())
        }
      })
      .catch(err => {
          dispatch(fetchTrackError(err.message))
          dispatch(loadingHide())
      });
  }
}

export const fetchTrackSuccess =  (data) => {
  return {
    type: FETCH_TRACK_SUCCESS,
    payload: data 
  }
};

export const fetchTrackError =  (error) => {
  return {
    type: FETCH_TRACK_ERROR,
    payload: error
  }
};

export const userLogin = (access_token) => {
  const URL = `/api/me`
  return(dispatch) => {
    fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token.access_token}`
        }
      })
      .then(res => res.json())
      .then(data => {
          if (data.error) {
            dispatch(userLoginError(data.error))
          }else{
            dispatch(userLoginSuccess(data,access_token))
          }
      })
      .catch(err => {
          dispatch(userLoginError(err.message))
      });
  }
  }


  
export const userLoginSuccess =  (data,access_token) => {
  localStorage.setItem('access_token', access_token.access_token);
  localStorage.setItem('country', data.country);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
    access_token: access_token
  }
};
export const userLoginError =  (data) => {
  return {
    type: LOGIN_ERROR,
    payload: data 
  }
};
export const userLogout = () => {
  return(dispatch) => {
    dispatch(userLogoutSuccess())
    dispatch(fetchPlaylistReset())
  }
}

export const userLogoutSuccess =  () => {
localStorage.removeItem('access_token');
localStorage.removeItem('country');
return {
  type: LOGOUT_SUCCESS
}
};
export const loadingShow =  () => {
  return {
    type: LOADING_SHOW
  }
};
export const loadingHide =  () => {
  return {
    type: LOADING_HIDE
  }
};