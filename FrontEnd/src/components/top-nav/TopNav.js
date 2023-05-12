import React from 'react'
import './TopNav.css'
import ProcessStatusSelector from '../ProcessStatusSelector'

function TopNav({selectedProcessStatus, setSelectedProcessStatus}) {
  
  return (
    <nav className='top-nav'>
        <h1 className='title'>Component State Checker</h1>
        <div className='selector'>
            <ProcessStatusSelector  selectedProcessStatus={selectedProcessStatus} setSelectedProcessStatus={setSelectedProcessStatus} />
        </div>
        
    </nav>
  )
}

export default TopNav