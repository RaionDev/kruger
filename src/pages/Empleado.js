import React, { useContext } from 'react'
import DataUser from '../components/DataUser';
import NavTab from '../components/NavTab';
import { AppContex } from '../components/Provider';
import Signin from '../components/Signin'

const Empleado = () => {

    const {state} = useContext(AppContex);
    return (
        <div className='h-full w-full flex-col items-center'>
            <NavTab/>
            {
                state == null ?
                    <Signin />
                    :
                    <>
                        <DataUser />

                    </>
            }


        </div>
    )
}

export default Empleado