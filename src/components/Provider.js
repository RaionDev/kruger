import React, { createContext,  useMemo,  useState } from 'react'

export const AppContex = createContext();

const DataProvider = (props) => {
    const [state, setState] = useState(null);
    const [modal1, setModal1] = useState(false);
    const [modal3, setModal3] = useState(false);

    const providerValue = useMemo(() => ({
        state, setState,modal1, setModal1,modal3, setModal3
      }), [state, setState,modal1, setModal1,modal3, setModal3])
    
    return (
        <AppContex.Provider
            value={providerValue}         >
            {props.children}
        </AppContex.Provider>
    )

}
export default DataProvider;


