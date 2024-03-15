import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPage, CategoryPage, CheckoutPage, DashboardPage, ProductDetailsPage, SigninPage, SignupPage } from './Routes';
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
          <Route path={URL._task.details} element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App