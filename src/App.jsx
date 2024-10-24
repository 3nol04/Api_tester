
import React,{ Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Dasboard = React.lazy(() => import('./components/menu.jsx'))
const Register = React.lazy(() => import('./components/Register.jsx'))
const Login = React.lazy(()=> import ('./components/Login.jsx'))
function App() {

  return (
    <Router>
      <Suspense>
        <Routes>

          <Route path="/" 
          element={<Dasboard />}/>

          <Route path='/register'
          element={<Register />}/>

          <Route path='/Login'
          element={<Login/>}/>

        </Routes>
      </Suspense>

    </Router>
  )
}

export default App
