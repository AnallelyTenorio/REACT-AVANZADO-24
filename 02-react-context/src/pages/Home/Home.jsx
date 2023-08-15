import React from 'react'
import SongDetails from '../../components/SongDetails/SongDetails'
import SongList from '../../components/SongList/SongList'
import { SongProvider } from '../../context/SongContext'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>lado izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>lado derecho</h2>
          <SongDetails />
        </div>
      </div>
    </SongProvider>

  )
}

export default Home
