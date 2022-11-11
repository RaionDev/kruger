import React, { useContext, useState } from 'react'
import { AppContex } from './Provider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import UpdateData from '../functions/UpdateData';
import { AiOutlineReload, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { GoSignOut } from "react-icons/go"
import { FaRegIdCard, FaBirthdayCake } from "react-icons/fa"
import { MdOutlinePlace } from "react-icons/md"
import { TbVaccine, TbVaccineBottle } from "react-icons/tb"
import { GiOverdose } from "react-icons/gi"
import { BsCalendarDate } from "react-icons/bs"
import toast,{Toaster}from 'react-hot-toast';
import moment from 'moment';

const DataUser = () => {
    const { state, setState } = useContext(AppContex);
    const [address, setAddress] = useState(state.address)
    const [phone, setPhone] = useState(state.phone)
    const [vaccinated, setVaccinated] = useState(state.vaccinated)
    const [birthday, setBirthday] = useState(state.birthday !== "" && state.birthday !== null ? new Date(Number(state.birthday)) : new Date())
    const [dose, setDose] = useState(state.dose)
    const [type, setType] = useState(state.type)
    const [date, setDate] = useState(state.date !== "" && state.date !== null ? new Date(Number(state.date)) : new Date())


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
        <div className='flex flex-col items-center w-screen'>

            <Toaster/>
            <h1 className="text-title">
                {state.name + " " + state.lastName}
            </h1>
            <div className='items-start flex flex-col w-full p-5'>

                {/* IDCARD */}
                <div className="div-profileData">
                    <div className='div-profileTitle'>
                        <FaRegIdCard color='gray' />
                        <p className='text-inputTitle'>
                            Identy Card:
                        </p>
                    </div>
                    <p>
                        {state.idcard}
                    </p>
                </div>

                {/* EMAIL */}
                <div className="div-profileData">
                    <div className='div-profileTitle'>
                        <AiOutlineMail color='gray' />
                        <p className='text-inputTitle'>
                            Email Address:
                        </p>
                    </div>
                    <p>
                        {state.email}
                    </p>
                </div>

                {/* ADDRESS */}
                <div className='div-profileData'>
                    <div className='div-profileTitle'>
                        <MdOutlinePlace color='gray' />
                        <p className='text-inputTitle'>
                            Address:
                        </p>
                    </div>
                    <input
                        className='text-input w-2/6'
                        value={address}
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                {/* PHONE */}
                <div className='div-profileData'>
                    <div className='div-profileTitle'>
                        <AiOutlinePhone color='gray' />
                        <p className='text-inputTitle'>
                            Cell Phone
                        </p>
                    </div>
                    <input
                        className='text-input w-2/6'
                        value={phone}
                        placeholder='Cell phone'
                        onChange={(e) => setPhone(e.target.value)}
                        type='number'
                    />
                </div>
                <div className='div-profileData'>
                    <div className='div-profileTitle'>
                        <FaBirthdayCake color='gray' />
                        <p className='text-inputTitle'>
                            Birthday
                        </p>
                    </div>
                    <div className='w-2/6'>
                        <DatePicker

                            dateFormat={"dd/MM/yyyy"}
                            selected={birthday}
                            onChange={(date) => {
                                setBirthday(date)
                            }} />

                    </div>
                </div>


                <div className='div-profileData'>
                    <div className='div-profileTitle'>
                        <TbVaccine color='gray' />
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
                                <TbVaccineBottle color='gray' />
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
                                <GiOverdose color='gray' />
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
                                <BsCalendarDate color='gray' />
                                <p className='text-inputTitle'>
                                    Date
                                </p>
                            </div>
                            <div className='w-2/6'>
                                <DatePicker

                                    dateFormat={"dd/MM/yyyy"}
                                    selected={date}
                                    onChange={(newDate) => {
                                        setDate(newDate)
                                    }} />

                            </div>
                        </div>
                    </>
                    : null
                }

            </div>
            <button
                onClick={() => {
                    const bdate = moment(birthday).format("x")
                    if ((vaccinated === true && dose !== "" && type !== "" && date !== "") || vaccinated !== true) {
                        let result
                        if (vaccinated === true) {
                            const vdate = moment(date).format("x")
                            result = UpdateData(state.idcard,state.name,state.lastName,state.email, phone, address, bdate, vaccinated, dose, type, vdate)
                        } else {
                            result = UpdateData(state.idcard,state.name,state.lastName,state.email, phone, address, bdate)

                        }
                        if (result.type === "succes") {
                            toast.success(result.message)
                            setState(result.data)
                        }
                    } else {
                        toast.error("Fields are empty")
                    }
                }

                }
                className="button-update">
                <AiOutlineReload color='white' size={20} />
                <p className="text-white font-semibold ">
                    Actualizar
                </p>
            </button>

            <button
                className='button-logout'
                onClick={() => {
                    setState(null)
                }}>
                <GoSignOut size={20} color="gray" />
                <p className='font-semibold text-gray-600'>
                    Log out
                </p>
            </button>
        </div>
    )
}

export default DataUser