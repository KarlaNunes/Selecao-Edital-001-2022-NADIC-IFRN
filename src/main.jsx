import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import { CreateElectionPage } from './pages/CreateElectionPage'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/election' element={<CreateElectionPage />} />
        {/* </Route> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
