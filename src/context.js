import {createContext, useContext, useEffect, useState} from "react";
const WeatherContext = createContext({})



export const WeatherProvider = ({children}) => {

	const [city, setCity] = useState(undefined)

	const values = {city, setCity}

	useEffect(() => {
		// axios.get("https://api.openweathermap.org/data/2.5/weather?q=Ankara,tr&APPID=b8fbe538701d657b1c6a0cf89d075344")
		// 	.then(res => setForecast(res))
		// 	.catch(e => console.log(e))
		// setForecast(data)
		// if (city !== undefined) {
		// 	console.log()
		// }

	}, [city])


	return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useForecast = () => useContext(WeatherContext)

