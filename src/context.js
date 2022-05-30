import {createContext, useContext, useState} from "react";

const ColorContext = createContext(undefined)

const ContextProvider = ({children}) => {
	const [color, setColor] = useState("blue")
	const values = {color, setColor}

	return <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
}

	const useColor = () => useContext(ColorContext)
export {ContextProvider, ColorContext, useColor}




