
import React,{ Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

 
const Dasboard = React.lazy(() => import('./components/Menu.jsx'))
function App() {

  return (
    <Router>
      <Suspense>
        <Routes>

          <Route path="/Menu" 
          element={<Dasboard />}/>

        </Routes>
      </Suspense>

    </Router>
  )
}

export default App
