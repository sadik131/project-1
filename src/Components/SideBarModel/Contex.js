import React, { useContext, useState } from "react"


const ReactContex = React.createContext()

const AppProvider = ({ children }) => {

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);


    return <ReactContex.Provider value={{
        isOpenModel,
        setIsOpenModel,
        isOpenSidebar,
        setIsOpenSidebar
    }}>{children}</ReactContex.Provider>
}

const useGlobalContex = () => {
    return useContext(ReactContex)
}

export { ReactContex, AppProvider, useGlobalContex }