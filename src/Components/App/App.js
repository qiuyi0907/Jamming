import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Beautiful Life", artist: "Annie", album: "Life", id: 1 },
        { name: "Beautiful Day", artist: "Eric", album: "Life", id: 2 },
      ],
      playlistName: "KPOP",
      playlistTracks: [
        { name: "NXUD", artist: "(G)-IDLE", album: "I LOVE", id: 3},
        { name: "Attention", artist: "New Jeans", album: "Attention", id: 4}
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
