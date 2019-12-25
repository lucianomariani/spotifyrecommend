import React from 'react';
import Landing from './routes/Landing';
import PlaylistsPage from './routes/PlaylistsPage';
import PlaylistTracksPage from './routes/PlaylistTracksPage';
import TrackPage from './routes/TrackPage';
import Logout from './routes/Logout';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/playlists" component={PlaylistsPage}/>
          <Route exact path="/playlist-tracks/:id/:title" component={PlaylistTracksPage}/>
          <Route exact path="/track/:id" component={TrackPage}/>
      </BrowserRouter>
    );
  }

}

export default App;