import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import {Home} from './pages/Home'
import { CreateElectionPage } from './pages/CreateElectionPage'
import { ElectionsPage } from './pages/ElectionsPage'
import './styles/global.css'
import { SignInPage } from './pages/SignInPage'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/election' element={<CreateElectionPage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/vote' element={<ElectionsPage />}  />
      </Routes>
  </BrowserRouter>
)
