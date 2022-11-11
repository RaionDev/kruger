import React, { useContext, useEffect, useState } from 'react'
import getDatabase from '../functions/getDatabase'
import Modal from 'react-modal';
import CrearUsuario from '../components/CrearUsuario';
import { FaUserPlus, FaFilter } from "react-icons/fa"
import { AppContex } from '../components/Provider';
import NavTab from '../components/NavTab';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker';
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai"
import UserEdit from '../components/UserEdit';
import { Toaster } from 'react-hot-toast';

const Administrador = () => {
    const [modal2, setModal2] = useState(false)

    const [list, setList] = useState([])
    const { modal1, setModal1, modal3, setModal3 } = useContext(AppContex);
    const [fV, setFV] = useState("all")
    const [rD, setRD] = useState(false)
    const [d1, setD1] = useState(new Date())
    const [d2, setD2] = useState(new Date())
    const [type, setType] = useState("all")


    const [userE, setUserE] = useState(null)


    const [flag, setFlag] = useState(0)

    const Filtro = (saved) => {
        let filtro = []
        switch (fV) {
            case "Yes":
                if (type !== "all") {
                    filtro = saved.filter((item) => item.type === type)
                    setList(filtro)
                } else {
                    filtro = saved.filter((item) => item.vaccinated === true)
                    setList(filtro)
                }

                let filtro2 = []
                if (rD) {
                    const date1 = moment((d1)).format("x")
                    const date2 = moment((d2)).format("x")
                    filtro.forEach(e => {
                        const date3 = Number(e.date)
                        if (date1 <= date3 && date2 >= date3) {
                            filtro2.push(e)
                        }
                    });
                    setList(filtro2)
                }

                break;
            case "No":
                filtro = saved.filter((item) => item.vaccinated !== true)
                setList(filtro)
                break;

            default:
                setList(saved)
                break;
        }
    }

    useEffect(() => {
        const saved = getDatabase()
        Filtro(saved)
    }, [modal1, flag, modal3])

    return (
        <div className='flex flex-col relative h-screen items-center w-screen' >
            <Toaster />
            <NavTab />
            <button className='button-add'
                onClick={() => setModal1(true)}>
                <FaUserPlus color='white' size={25} />
            </button>

            <button className='button-filter'
                onClick={() => {
                    setFlag(1)
                    setModal2(true)
                }}>
                <FaFilter color='white' size={25} />
            </button>

            <Modal
                className={"modal1 h-auto"}
                isOpen={modal2}
                onRequestClose={() => setModal2(false)}
                ariaHideApp={false}
            >
                <div className='flex flex-col w-full  relative h-full'>
                    <button onClick={() => setModal2(false)}
                        className='absolute top-0 right-0'>
                        <AiOutlineClose size={20} />
                    </button>
                    <div>
                        <p className='text-[30px] font-semibold text-center'>
                            Filters
                        </p>
                        <div className='div-filter mt-5'>
                            <p>
                                Vaccinated
                            </p>
                            <div>
                                <input
                                    value={"Yes"}
                                    type={'radio'}
                                    onChange={(e) => setFV(e.target.value)}
                                    checked={fV === "Yes"}
                                />
                                <p>
                                    Yes
                                </p>
                            </div>

                            <div>
                                <input
                                    value={"No"}
                                    type={'radio'}
                                    onChange={(e) => setFV(e.target.value)}
                                    checked={fV === "No"}
                                />
                                <p>
                                    No
                                </p>
                            </div>

                            <div>
                                <input
                                    value={"all"}
                                    type={'radio'}
                                    onChange={(e) => setFV(e.target.value)}
                                    checked={fV === "all"}

                                />
                                <p>
                                    Both
                                </p>
                            </div>
                        </div>
                        {fV === "Yes" ?
                            <div>
                                <div className='div-filter'>
                                    <div className='flex flex-row'>
                                        <input
                                            checked={rD}
                                            type={'checkbox'}
                                            onChange={(e) => {
                                                setRD(!rD)
                                            }}
                                        />
                                        <p className='ml-5'>
                                            Date Range
                                        </p>
                                    </div>
                                    <div className='w-1/4'>
                                        <ReactDatePicker
                                            maxDate={d2}
                                            dateFormat={"dd/MM/yyyy"}
                                            selected={d1}
                                            onChange={(date) => {
                                                setD1(date)
                                            }} />
                                    </div>
                                    <div className='w-1/4'>
                                        <ReactDatePicker
                                            minDate={d1}
                                            maxDate={new Date()}
                                            dateFormat={"dd/MM/yyyy"}
                                            selected={d2}
                                            onChange={(date) => {
                                                setD2(date)
                                            }} />
                                    </div>
                                </div>

                                <div className='div-filter mt-5'>
                                    <div>
                                        <input
                                            value={"Sputnik"}
                                            type={'radio'}
                                            onChange={(e) => setType(e.target.value)}
                                            checked={type === "Sputnik"}
                                        />
                                        <p>
                                            Sputnik
                                        </p>
                                    </div>

                                    <div>
                                        <input
                                            value={"AstraZeneca"}
                                            type={'radio'}
                                            onChange={(e) => setType(e.target.value)}
                                            checked={type === "AstraZeneca"}
                                        />
                                        <p>
                                            AstraZeneca
                                        </p>
                                    </div>

                                    <div>
                                        <input
                                            value={"Pfizer"}
                                            type={'radio'}
                                            onChange={(e) => setType(e.target.value)}
                                            checked={type === "Pfizer"}

                                        />
                                        <p>
                                            Pfizer
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            value={"Jhonson&Jhonson"}
                                            type={'radio'}
                                            onChange={(e) => setType(e.target.value)}
                                            checked={type === "Jhonson&Jhonson"}

                                        />
                                        <p>
                                            Jhonson&Jhonson
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            value={"all"}
                                            type={'radio'}
                                            onChange={(e) => setType(e.target.value)}
                                            checked={type === "all"}

                                        />
                                        <p>
                                            All
                                        </p>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    <div className='justify-end flex p-5 mt-5'>
                        <button className='button-save'
                            onClick={() => {
                                setFlag(0)
                                setModal2(false)
                            }}
                        >
                            <p className='text-white font-semibold'>
                                Filtar
                            </p>
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal
                className={"modal1"}
                isOpen={modal1 ?? false}
                onRequestClose={() => setModal1(false)}
                ariaHideApp={false}
            >
                <CrearUsuario />
            </Modal>

            <Modal
                className={"modal1 overflow-y-auto h-5/6"}
                isOpen={modal3 ?? false}
                onRequestClose={() => setModal3(false)}
                ariaHideApp={false}
            >
                <UserEdit data={userE} />
            </Modal>

            <h1 className='text-title '>
                Users
            </h1>

            <div className='flex flex-row justify-center w-full '>
                <p className='div-title'>
                    Name
                </p>
                <p className='div-title'>
                    Last Name
                </p>
                <p className='div-title2 lg:div-title'>
                    Identity Card
                </p>
                <p className='div-title2 '>
                    Email
                </p>
                <p className='div-title'>
                    Phone
                </p>
                <p className='div-title'>
                    Address
                </p>
                <p className='div-title'>
                    Birthday
                </p>
                <p className='div-title2 lg:div-title'>
                    Vaccinated
                </p>
                <div className='w-[30px]'>

                </div>

            </div>
            {list.length > 0 ?
                list.map((item) =>
                    <div className='flex flex-row justify-center w-full' key={item.idcard}>
                        <p className='div-data'>
                            {item.name}
                        </p>
                        <p className='div-data'>
                            {item.lastName}
                        </p>
                        <p className='div-data2 lg:div-data'>
                            {item.idcard}
                        </p>
                        <p className='div-data2 '>
                            {item.email}
                        </p>
                        <p className='div-data'>
                            {item.phone}
                        </p>
                        <p className='div-data'>
                            {item.address}
                        </p>
                        <p className='div-data'>
                            {item.birthday !== null && item.birthday !== "" ? moment(Number(item.birthday)).format("DD/MM/yyyy") : null}
                        </p>
                        <p className='div-data2 lg:div-data'>
                            {item?.vaccinated === true ? `${item.type} dose ${item.dose} date ${moment(Number(item.date)).format("DD/MM/YYYY")}` : "No"}
                        </p>
                        <button className='w-[30px] items-center flex justify-center'
                            onClick={() => {
                                setUserE(item)
                                setModal3(true)
                            }}>
                            <AiOutlineEdit />
                        </button>
                    </div>
                )
                : <>
                    <div className=' w-11/12 lg:w-9/12 justify-center flex flex-row '>
                        <p className=' p-8 font-semibold text-[22px] text-gray-500 text-center'>
                            No Users
                        </p>
                    </div>
                </>
            }

        </div>
    )
}

export default Administrador