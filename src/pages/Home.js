import React from 'react'
import employee from "../images/empleado.jpg"
import admin from "../images/admin.png"
import { Link } from 'react-router-dom'
import NavTab from '../components/NavTab'

const Home = () => {
  return (
    <div>
      <NavTab />

      <h1 className='text-title'>
        Choose a mode
      </h1>
      <div className='w-full flex flex-row justify-around'>

        <div className='div-profile'>

          <Link to='/Administrador'
          >
            <p className='text-left font-semibold text-[30px] p-3'>
              Admin
            </p>
            <img
              alt='Admin Option'
              src={admin}
            />
          </Link>
        </div>

        <div className='div-profile'>
          <Link to='/Empleado' >
          <p className='text-left font-semibold text-[30px] p-3'>
              Employee
            </p>
            <img
              alt='Employee Option'
              src={employee}
            />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home