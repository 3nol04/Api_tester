
import React,{ Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Dasboard = React.lazy(() => import('./components/menu.jsx'))
const Register = React.lazy(() => import('./components/Register.jsx'))
const Login = React.lazy(()=> import ('./components/Login.jsx'))
const Kamar = React.lazy(()=>import ('./components/Kamar/Kamar.jsx'))
const AddKamar = React.lazy(()=>import ('./components/Kamar/Addkamar.jsx'))
const Admin = React.lazy(()=>import ('./components/Admin/Admin.jsx'))
const EditKamar = React.lazy(()=>import ('./components/Kamar/Editkamar.jsx'))

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

          <Route path ='/kamar' 
          element={<Kamar/>}/>

          <Route path ='/kamar/Addkamar'
          element={<AddKamar/>}/>

          <Route path ='/admin' 
          element={<Admin/>}/>

          <Route path ='/kamar/editkamar/:id'
          element={<EditKamar/>}/>

        </Routes>
      </Suspense>

    </Router>
  )
}

export default App
