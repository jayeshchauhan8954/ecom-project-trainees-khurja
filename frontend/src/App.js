import React from 'react'
import './App.css';

const App = () => {
  return (
    <div>
      <ul>
        <a>Home</a>
        <a>About</a>
        <a>Google</a>

        <input type="text" placeholder="SEARCH.."></input>
        <button>search</button>
        <a>LogIn</a>
        <a>SignUp</a>

      </ul>
      <div className='marque'>
        <marque>Gulashan Thakur</marque>
      </div>

      <div className='boxes'>
        <div className='box1'>Mobile Phones</div>
        <div className='box2'>Ear Buds</div>
        <div className='box3'>Smart Watch</div>
        <div className='box4'>Laptop</div>
      </div>

      <div className='box'>
        <div className='box5'>Jwellery</div>
        <div className='box6'>Cosmetic</div>
        <div className='box7'>Fashion</div>
      </div>

      <div className='boxe'>
        <div className='box8'>Clothes</div>
        <div className='box9'>FootWear</div>
      </div>
    </div>
  )
}

export default App
