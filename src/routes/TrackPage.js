import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TopBar from '../components/TopBar.js'
import Card from '../components/Card.js'
import Spinner from '../components/Spinner.js'
import ErrorMessage from '../components/ErrorMessage.js'
import { millisToMinutesAndSeconds} from '../utils';
import { PropTypes } from "prop-types";

export class TrackPage extends React.Component{
  
  /**
   * Fetch Track
   */
  componentDidMount() {
    const { match, fetchTrack } = this.props
    fetchTrack(match.params.id)
  }

  render() {
    const { track, loading, error, errorMessage } = this.props
    if (loading) {
        return <Spinner/>
    }else{
      if (error) {
        return <ErrorMessage>{errorMessage}</ErrorMessage>
      }else{
        if (typeof track !== 'undefined') {

          const artist = track.artists.map(e => e.name).join(",")
          const title = artist + ' ' + track.name
          const durationFormat = millisToMinutesAndSeconds(track.duration_ms)
          const image = track.album.images[0].url
          return <div>
                        <TopBar>{title}</TopBar>
                        <div className="cardGroup">
                          <Card 
                            image={image} 
                            title={track.name} 
                            subtitle={artist} 
                            text={durationFormat} 
                          />
                      </div>
                      </div>
        }else{
          return null
        }
        }
      }
  }
}


const mapStateToProps = (state, ownProps) => { 
  return {
    track: state.playlists.track,
    loading: state.loadings.loading,
    error: state.errors.error,
    errorMessage: state.errors.message,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTrack: actions.fetchTrack,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackPage);

TrackPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  fetchTrack: PropTypes.func.isRequired,
  track: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: function(props, propName, componentName) {
    if ((props['error'] === true && (props[propName] === undefined || typeof(props[propName]) !== 'string'))) {
        return new Error('Please provide a errorMessage');
    }
  }

}
