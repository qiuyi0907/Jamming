import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind();
  }


  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }


  render() {
    return (
      <div className="Playlist" >
        <input onChange={this.handleNameChange} />
        {/* <!-- Add a TrackList component --> */}
        <TrackList
          playlistName={this.props.playlistName}
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />

        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
