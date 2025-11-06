import React from "react";
import Player from "./components/Player";
import SongList from "./components/SongList";

const App = () => {

  return (
    <div className="min-h-screen bg-black">
      <div className="w-8/12 mx-auto py-10">
        <h1 className="text-4xl text-white font-bold mb-4">Music Plyer</h1>
        <Player />
        <div className="w-full bg-white rounded-lg">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
