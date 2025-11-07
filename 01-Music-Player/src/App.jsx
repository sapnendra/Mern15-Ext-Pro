import React from "react";
import Player from "./components/Player";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="w-8/12 mx-auto py-8">
        <h1 className="text-4xl text-white font-bold mb-4">Music Player</h1>
        <Player />

        <h1 className="text-4xl text-white font-bold mt-8">Your Playlist</h1>
        <SongList />
      </div>
    </div>
  );
};

export default App;
