import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Page from './components/router-playground/page'
import PageSharedLayout from './components/router-playground/layout'
import Page1 from './components/router-playground/page1'
import Page2 from './components/router-playground/page2'
import Page3 from './components/router-playground/page3'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages" element={<PageSharedLayout />}>
          <Route index element={<Page3 />} />
          <Route path="new" element={<Page2 />} />
          <Route path=":pageId" element={<Page />} />
        </Route>
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
