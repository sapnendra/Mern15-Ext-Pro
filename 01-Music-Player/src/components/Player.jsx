import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { play, pause, next, prev } from "../features/playerSlice";

const Player = () => {
  const { isPlaying, currentSong } = useSelector((state) => state.player);

  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const playPause = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  const nextSong = (song) => {
    dispatch(next(song));
  };

  const prevSong = (song) => {
    dispatch(prev(song));
  };

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [currentSong, isPlaying]);

  return (
    <>
      <div className="w-full bg-white rounded-lg p-8">
        <div className="mb-4 w-2/12 mx-auto">
          <img
            className="rounded-lg h-30 w-50 object-cover"
            src={currentSong?.img}
            alt="Song Image"
          />
        </div>
        <div className="flex items-center justify-between py-8 px-4 bg-gray-200 rounded-lg">
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold">{currentSong?.title}</h4>
            <p className="text-sm text-gray-500">{currentSong?.artist}</p>
          </div>
          <div>
            <button
              onClick={() => prevSong(currentSong)}
              className="cursor-pointer bg-green-500 text-white text-xl py-2 px-6 font-semibold mr-3 rounded-lg"
            >
              Prev
            </button>
            <button
              onClick={() => {
                playPause();
              }}
              className="cursor-pointer bg-red-500 text-white text-xl py-2 px-6 font-semibold mr-3 rounded-lg"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => nextSong(currentSong)}
              className="cursor-pointer bg-green-500 text-white text-xl py-2 px-6 font-semibold mr-3 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
        <div className="mt-4">
          <audio
            ref={audioRef}
            className="w-full"
            src={currentSong.songUrl}
            controls
          ></audio>
        </div>
      </div>
    </>
  );
};

export default Player;
