import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { action,originals,trending } from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="NETFLIX ORIGINALS"/>
      <RowPost url={action} title="ACTION" isSmall/>
      <RowPost url={trending} title="TRENDING" isSmall/>
      <Footer/>
    </div>
  )
}

export default App