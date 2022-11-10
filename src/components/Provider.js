import React, { createContext,  useState } from 'react'

export const AppContex = createContext();

const DataProvider = (props) => {
    const [state, setState] = useState(null);
    const [modal1, setModal1] = useState(false);

    return (
        <AppContex.Provider
            value={{ state, setState, modal1, setModal1 }}         >
            {props.children}
        </AppContex.Provider>
    )

}
export default DataProvider;


