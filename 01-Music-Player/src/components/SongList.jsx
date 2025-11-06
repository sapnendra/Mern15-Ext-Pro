import React from "react";
import { songs } from "../data/data.js";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../features/playerSlice.js";

const SongList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full bg-white mx-auto p-8 mt-4">
        <h2 className="text-4xl text-black font-bold text-center">
          Your Playlist
        </h2>
        <div className="flex flex-wrap shrink-0 gap-4 mt-4">
          {songs.map((song) => {
            return (
              <div
                onClick={() => dispatch(setCurrentSong(song))}
                key={song.id}
                className="h-65 w-50 p-3 rounded-lg border flex flex-col gap-2 items-center"
              >
                <img className="rounded-lg h-30 object-cover" src={song.img} alt={song.title} />
                <h2 className="text-xl font-bold mt-2">{song.title}</h2>
                <h3>{song.artist}</h3>
                <button className="cursor-pointer bg-green-500 text-white text-xl py-1 px-6 font-semibold mr-3 rounded-lg">
                  Prev
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SongList;
