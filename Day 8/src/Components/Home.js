import React from 'react'
import './Home.css'
import Categories from './Categories';
import { FaHeart} from 'react-icons/fa';

function Home() {
  return (
    <div className='textcss'>
      {/* <Categories /> */}
    
      <h4>Recommended PlayLists for you <FaHeart size={15}/></h4>
    <div className='gallery'>
      <div className='background1'></div>
        <div className='background2'></div>
        <div className='background3'></div>
        <div className='background4'></div>
        <div className='background5'></div>
        <div className='background6'></div>
       </div>
    </div>
  )
}

export default Home