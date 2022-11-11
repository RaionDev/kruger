import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import RemoveUser from '../functions/RemoveUser'
import UpdateData from '../functions/UpdateData'
import { AppContex } from './Provider'
import DatePicker from "react-datepicker";
import Select from 'react-select'
import moment from 'moment'

const UserEdit = ({ data = {} }) => {

    const [name, setName] = useState(data.name)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)
    const [address, setAddress] = useState(data.address)
    const [birthday, setBirthday] = useState(data.birthday !== "" && data.birthday !== null ? new Date(Number(data.birthday)) : new Date())
    const [vaccinated, setVaccinated] = useState(data.vaccinated ?? false)
    const [type, setType] = useState(data.type)
    const [dose, setDose] = useState(data.dose)
    const [dateV, setDateV] = useState(data?.date !== "" && data?.date !== null ? new Date(Number(data.date)) : new Date())

    const { state, setModal3, setState } = useContext(AppContex);

    const options = [
        { value: 'Sputnik', label: 'Sputnik' },
        { value: 'AstraZeneca', label: 'AstraZeneca' },
        { value: 'Pfizer', label: 'Pfizer' },
        { value: 'Jhonson&Jhonson', label: 'Jhonson&Jhonson' }
    ]

    const doses = [
        { value: 'I', label: 'I' },
        { value: 'II', label: 'II' },
        { value: 'III', label: 'III' },
        { value: 'IV', label: 'IV' },
        { value: 'V', label: 'V' }

    ]
    return (
        <div className='flex flex-col h-full justify-around p-5'>
            <div>
                <h1 className='text-titleModal'>
                    Update User
                </h1>
            </div>

            <p className='text-inputTitle'>
                Name
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
                Last name
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
                Identy card
            </p>

            <p>
                {data.idcard}
            </p>

            <p className='text-inputTitle'>
                Email address
            </p>
            <input
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                type='email'
                className='text-input'
            />

            <p className='text-inputTitle'>
                Phone Number
            </p>
            <input
                value={phone}
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
                required={true}
                type='number'
                className='text-input'
            />

            <p className='text-inputTitle'>
                Address
            </p>
            <input
                value={address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                required={true}
                className='text-input'
            />

            <p className='text-inputTitle'>
                Birthday
            </p>
            <DatePicker
                className='border-[2px] p-3 w-full rounded'
                dateFormat={"dd/MM/yyyy"}
                selected={birthday}
                onChange={(date) => {
                    setBirthday(date)
                }} />

            <div className='div-profileData items-center '>
                <div className='div-profileTitle h-10'>
                    <p className='text-inputTitle'>
                        Vaccinated
                    </p>
                </div>

                <input
                    checked={vaccinated}
                    onChange={() => setVaccinated(true)}
                    type='radio'
                /><p>
                    Yes
                </p>
                <input
                    className='ml-5'
                    checked={!vaccinated}
                    onChange={() => {
                        setVaccinated(false)
                    }
                    }
                    type='radio'
                /><p>
                    No
                </p>
            </div>
            {vaccinated === true ?
                <>
                    <div className='div-profileData'>
                        <div className='div-profileTitle'>
                            <p className='text-inputTitle'>
                                Type
                            </p>
                        </div>
                        <Select options={options} className="w-2/6"
                            value={{ label: type }}
                            onChange={(e) => setType(e.value)}
                        />
                    </div>
                    <div className='div-profileData'>
                        <div className='div-profileTitle'>
                            <p className='text-inputTitle'>
                                Dose
                            </p>
                        </div>
                        <Select options={doses} className="w-2/6"
                            value={{ label: dose }}
                            onChange={(e) => setDose(e.value)}

                        />
                    </div>

                    <div className='div-profileData'>
                        <div className='div-profileTitle'>
                            <p className='text-inputTitle'>
                                Date
                            </p>
                        </div>
                        <div className='w-2/6'>
                            <DatePicker
                                className='border-[2px]'
                                dateFormat={"dd/MM/yyyy"}
                                selected={dateV}
                                onChange={(newDate) => {
                                    setDateV(newDate)
                                }} />

                        </div>
                    </div>
                </>
                : null
            }

            <div className='flex justify-end mt-5'>
                <button
                    className='button-cancel'
                    onClick={() => {
                        if (state?.idcard === data.idcard) {
                            setState(null)
                        }
                        const result = RemoveUser(data.idcard)
                        toast.success(result.message)
                        setModal3(false)
                    }}
                >
                    <p className='font-semibold'>
                        Delete
                    </p>
                </button>

                <button
                    className='button-save'
                    onClick={() => {
                        const bdate = moment(birthday).format("x")
                        if ((vaccinated === true && dose !== "" && type !== "" && dateV !== "") || vaccinated !== true) {
                            let result
                            if (vaccinated === true) {
                                const vdate = moment(dateV).format("x")
                                result = UpdateData(data.idcard, name, lastName, email, phone, address, bdate, vaccinated, dose, type, vdate)
                            } else {
                                result = UpdateData(data.idcard, name, lastName, email, phone, address, bdate)
                            }
                            if (result.type === "succes") {
                                toast.success("User saved")
                                if (state?.idcard === data.idcard) {
                                    setState(result.data)
                                }
                            } else {
                                toast.error(result.message)
                            }
                        } else {
                            toast.error("Fields are empty")

                        }
                    }}
                >
                    <p className='font-semibold text-white'>
                        Update
                    </p>
                </button>
            </div>
        </div>
    )
}

export default UserEdit