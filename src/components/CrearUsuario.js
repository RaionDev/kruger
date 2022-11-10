import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import NewUser from '../functions/NewUser'
import { AppContex } from './Provider'


const CrearUsuario = () => {
    const [idcard, setIdCard] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const {setModal1} = useContext(AppContex);

    return (
        <div className='flex flex-col h-full justify-around'>
            <Toaster />
            <div>
                <h1 className='text-titleModal'>
                    Create Account
                </h1>
            </div>

            <p className='text-inputTitle'>
                Name*
            </p>
            <input
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value.replace(/[^a-z\s]/gi, ''))}
                required={true}
                type='text'
                className='text-input'
            />

            <p className='text-inputTitle'>
                Last name*
            </p>
            <input
                value={lastName}
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value.replace(/[^a-z\s]/gi, ''))}
                required={true}
                type='text'
                className='text-input'

            />
            <p className='text-inputTitle'>
                Identy card*
            </p>
            <input
                value={idcard}
                placeholder="Identy card"
                onChange={(e) => setIdCard(e.target.value)}
                required={true}
                type='number'
                className='text-input'
            />


            <p className='text-inputTitle'>
                Email address*
            </p>
            <input
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                type='email'
                className='text-input'

            />
            <p className='text-gray-500 text-[13px]  font-semibold'>
                {"(All fields are required)"}
            </p>
            <div className='flex justify-end mt-5'>

                <button
                    className='button-cancel'
                    onClick={() => setModal1(false)}
                >
                    <p className='font-semibold'>
                        Cancel
                    </p>
                </button>

                <button
                    className='button-save'
                    onClick={async() => {
                        const result = await NewUser(name, lastName, idcard, email)
                        if (result.type === "succes") {
                            toast.success("User saved")
                        } else {
                            toast.error(result.message)
                        }
                    }}
                >

                    <p className='font-semibold text-white'>
                        Create Account
                    </p>
                </button>
            </div>
        </div>
    )
}

export default CrearUsuario