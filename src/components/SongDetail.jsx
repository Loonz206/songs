import React from "react";
import { shape, string } from "prop-types";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:
        {song.title}
        <br />
        Duration:
        {song.duration}
      </p>
    </div>
  );
};

SongDetail.defaultProps = {
  song: {
    duration: "example",
    title: "example title"
  }
};

SongDetail.propTypes = {
  song: shape({
    duration: string,
    title: string
  })
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
