import React from 'react'
import Header from '../../components/header/Header'
import Hometab from '../../components/hometab/Hometab'
import './home.css'

const Home = () => {
  return (
      <div>
          <div className="home-container">
        <Header />
        <Hometab/>
          </div>
      
    </div>
  )
}

export default Home
