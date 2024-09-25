import React from 'react'
import './Head.css'
import Nav from './Nav/Nav'
import Header from './Header/Header'

export default function Head() {
  return (
    <div>
      <div className='main_header'>
      <div class="container_site">
        <Nav />
        <Header />
      </div>
      </div>
    </div>
  )
}
