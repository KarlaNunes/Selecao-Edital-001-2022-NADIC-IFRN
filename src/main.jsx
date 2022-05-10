import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import { Election } from './pages/Election'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='election' element={<Election />} />
        {/* </Route> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
