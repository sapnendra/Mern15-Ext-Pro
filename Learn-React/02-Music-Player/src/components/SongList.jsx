import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSongs, setCurrent, play } from '../features/player/playerSlice'

const SongList = () => {
  const songs = useSelector(selectSongs)
  const dispatch = useDispatch()

  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <div
          key={song.id}
          className="p-3 rounded-md hover:bg-gray-100 flex items-center justify-between"
        >
          <div>
            <div className="font-medium">{song.title}</div>
            <div className="text-sm text-gray-500">{song.artist}</div>
          </div>
          <div>
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={() => {
                dispatch(setCurrent(song.id))
                dispatch(play())
              }}
            >
              Play
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SongList
