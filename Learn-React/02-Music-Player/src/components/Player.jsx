import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentSong,
  selectPlaying,
  play,
  pause,
  next,
  prev,
} from "../features/player/playerSlice";

const Player = () => {
  const current = useSelector(selectCurrentSong);
  const playing = useSelector(selectPlaying);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing, current]);

  useEffect(() => {
    // auto play when current changes
    if (!audioRef.current) return;
    audioRef.current.load();
    if (playing) audioRef.current.play().catch(() => {});
  }, [current, playing]);

  if (!current) return null;

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <div>
          <div className="font-semibold">{current.title}</div>
          <div className="text-sm text-gray-500">{current.artist}</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => dispatch(prev())}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Prev
          </button>
          {playing ? (
            <button
              onClick={() => dispatch(pause())}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={() => dispatch(play())}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Play
            </button>
          )}
          <button
            onClick={() => dispatch(next())}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <audio ref={audioRef} className="w-full mt-3" controls>
        <source src={current.url} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
