import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPage, CategoryPage, CheckoutPage, DashboardPage, Productdeatilspage, SigninPage, SignupPage } from './Routes';
import URL from './Routes/routes'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={URL._auth.signup} element={<SignupPage />} />
          <Route path={URL._main.dashboard} element={< DashboardPage />} />
          <Route path={URL._auth.signin} element={<SigninPage />} />
          <Route path={URL._task.card} element={<CardPage />} />
          <Route path={URL._task.category} element={<CategoryPage />} />
          <Route path={URL._task.checkout} element={<CheckoutPage />} />
          <Route path={URL._task.details} element={<Productdeatilspage />} />

        </Routes>
      </BrowserRouter>
=======
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
>>>>>>> abd77ef52455b941f1a43b16f2238a0f38dd5949
    </div>
  )
}

export default App
