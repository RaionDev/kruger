import React from 'react'
import employee from "../images/empleado.jpg"
import admin from "../images/admin.png"

const Home = () => {
  return (
    <div>
      <h1>
        Escoge el Modo
      </h1>
      <div className='w-full flex flex-row justify-around'>

        <div className='div-profile'>

          <a
            href='/Administrador'
          >
            <p className='text-left font-semibold'>
              Admin
            </p>
            <img
              src={admin}
            />
          </a>
        </div>

        <div className='div-profile'>
          <a
            href='/Empleado'

          >
            <p className='text-left font-semibold'>
              Employee
            </p>
            <img
              src={employee}
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home