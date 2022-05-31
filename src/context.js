import {createContext, useContext, useState} from "react";
const WeatherContext = createContext({})
export const WeatherProvider = ({children}) => {
	const [city, setCity] = useState(undefined)
	const values = {city, setCity}
	return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useForecast = () => useContext(WeatherContext)

