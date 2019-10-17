import React, { Component } from "react";
import { string, func, arrayOf, shape } from "prop-types";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderList() {
    const { songs, selectSong } = this.props;
    return songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              type="button"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

SongList.propTypes = {
  songs: arrayOf(
    shape({
      title: string
    })
  ).isRequired,
  selectSong: func.isRequired
};

// Convention for wiring up state to components
const mapStateToProps = state => {
  // always returns an object with state
  return { songs: state.songs };
};

// don't forget to include the mapStateToProps in the connect, and the action
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
