import { useState } from 'react'
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainContainer flex' >

        <div className='mainContent'>
          <Nav />

          {/* content section */}
          <div className='pt-5 contentSection'>
            <Outlet />
          </div>

        </div>


      </div>
    </>
  )
}

export default App
