import React from 'react'
import Player from './components/Player'
import SongList from './components/SongList'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-white">Music Player</h1>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-5">
            <Player />
          </div>
          <div className='md:col-span-5'>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="font-semibold mb-3">Song List</h2>
              <SongList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App