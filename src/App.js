import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Page from './components/router-playground/page'
import PageSharedLayout from './components/router-playground/layout'
import Page1 from './components/router-playground/page1'
import Page2 from './components/router-playground/page2'
import Page3 from './components/router-playground/page3'
import UseMemoPlayground from './components/usememo-playground'
import UseRefPlayground from './components/useRef-playground'
import UseRefUnmount from './components/useRef-playground/unmount-err'
import TicTacToe from './components/tic-tac-toe-class-collaboration'
import CarList from './components/router-playground/cars'
import CarDetails from './components/router-playground/cars/details'
import ApiCallPlayground from './components/api-call-playground'
import MovieDetails from './components/movie-details'

// import Homework from './homework'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkblue',
                height: '100vh',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              <span>Hey Guys!</span>
              <span>Welcome!</span>
              <br />
              <span>How did you like the API?</span>
            </div>
          }
        />
        <Route path="api-call" element={<ApiCallPlayground />} />
        <Route path="usememo" element={<UseMemoPlayground />} />
        <Route path="useref" element={<UseRefPlayground />} />
        <Route path="useref-unmount" element={<UseRefUnmount />} />
        <Route path="ttt" element={<TicTacToe />} />
        <Route path="/pages" element={<PageSharedLayout />}>
          <Route index element={<Page3 />} />
          <Route path="new" element={<Page2 />} />
          <Route path=":pageId" element={<Page />} />
        </Route>
        <Route path="/cars">
          <Route index element={<CarList />} />
          <Route path=":carId" element={<CarDetails />} />
        </Route>
        <Route path="/movie-details" element={<MovieDetails />} />
        {/* <Route path="/homework" element={<Homework />} /> */}
        <Route path="*" element={<Page1 />} />
        
        {/* <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />

        <Route path="/element-sample" element={<h2>h2 element</h2>} /> */}

        {/* <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/language-selector" element={<LanguageSelector />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
