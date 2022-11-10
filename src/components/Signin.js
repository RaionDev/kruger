import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Login from '../functions/Login'
import { AppContex } from './Provider'

const Signin = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const { setState} = useContext(AppContex);

    return (
        <div className='flex flex-col items-center'>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

            <h1 className='text-title'>
                Welcome
            </h1>
            <p className='text-inputTitle w-3/6 text-left mt-16'>
                {"Username (Identity Card):"}
            </p>
            <input
                value={user}
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                required={true}
                className="text-input w-3/6"
            />

            <p className='text-inputTitle w-3/6 text-left mt-5'>
                {"Pasword (Last Name):"}
            </p>
            <input
                value={pass}
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                required={true}
                type='password'
                className="text-input w-3/6"

            />
            <button
                className='button-signin'
                onClick={() => {
                    const result = Login(user, pass)
                    if (result.type === "success") {
                        setState(result.data)
                    } else {
                        toast.error(result.message)
                    }
                }}
            >
                <p className='text-white font-semibold'>
                    Sign in
                </p>
            </button>
        </div>
    )
}

export default Signin