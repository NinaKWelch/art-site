import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const LandingPage = () => {
  return (
    <div className='App'>
      <header className="App-header">
        <h2>Art Site</h2>
        <nav>
          <Link to='/home' className='App-link'>Visit site</Link>
        </nav>
      </header>
    </div>
  )
}

export default LandingPage