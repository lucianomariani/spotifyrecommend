import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TopBar from '../components/TopBar.js'
import Card from '../components/Card.js'
import Spinner from '../components/Spinner.js'
import ErrorMessage from '../components/ErrorMessage.js'
import { PropTypes } from 'prop-types' 

class PlaylistTracksPage extends React.Component{
  
  /**
   * Fetch Playlist Tracks
   */
  componentDidMount() {
    const { match, fetchPlaylistTracks } = this.props
    fetchPlaylistTracks(match.params.id)
  }
  render() {
    const { loading, tracks, match, error, errorMessage } = this.props
    let tracksShow 
    
    if (loading) {
      tracksShow = <Spinner/>
    }else{
      if (error) {
        return <ErrorMessage>Error: {errorMessage}</ErrorMessage>
      }else{
        if (typeof tracks.items !== 'undefined') {
        tracksShow = tracks.items.map((items, index) => {
          if (items.track!== null) {
            return <Card 
            key={index} 
            image={items.track.album.images[0].url} 
            to={`/track/${items.track.id}`} 
            subtitle={ items.track.album.artists.map(e => e.name).join(",")} 
            text={`Popularity: ${items.track.popularity}`} 
            title={ items.track.name } 
            />
          }else{
            return null
          } 
            
        })
      }
      }
    }

    return (
      <div >
        <TopBar>
          {match.params.title}
        </TopBar>
        <div className="cardGroup">
          {tracksShow}
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => { 
  return {
    tracks: state.playlists.tracks,
    error: state.errors.error,
    errorMessage: state.errors.message,
    loading: state.loadings.loading,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlaylistTracks: actions.fetchPlaylistTracks,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistTracksPage);

PlaylistTracksPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  }),
  tracks: PropTypes.object,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  fetchPlaylistTracks: PropTypes.func.isRequired

}