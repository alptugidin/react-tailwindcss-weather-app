import Card from "./Card";
import {useEffect} from "react";
import {cities} from "./cities";
import {useForecast} from "../context";
import {data} from "../data";

const cardEffect = (cards) => {


	if (!cards[0].classList.contains("opacity-0")) {
		cards.map(card => card.classList.add("opacity-0"))
	}

	let start = 0
	const len = cards.length
	setInterval(() => {
		if (start < len) {
			cards[start].classList.toggle("opacity-0")
			start++
		} else {
			clearInterval()
		}
	}, 70)
}


const Weather = () => {


	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const currentDay = days[new Date().getDay() - 1]
	const currentIndex = days.indexOf(currentDay)
	const arr1 = days.slice(currentIndex, days.length)
	const arr2 = days.slice(0, currentIndex)
	const orderedDays = [...arr1, ...arr2, currentDay]

	const context = useForecast()

	const handleOnChange = (cards, city) => {
		cardEffect(cards)

		context.setCity(cities.find(e => e.name === city))
	}

	// const apiUrl = (lat, lon) => {
		// return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=tur&units=metric&exclude=current,minutely,hourly,alerts&APPID=b8fbe538701d657b1c6a0cf89d075344`
		// return data
	// }


	useEffect(() => {
		const cards = [...document.querySelectorAll(".card")]
		cards.map(card => card.classList.add("opacity-0"))
		cardEffect(cards)
		const firstCard = document.getElementById("main-div").childNodes[1]
		firstCard.classList.add("bg-gray-100")
		// context.setCity(cities.find(e => e.name === "Ankara"))
		context.setCity(data)

	}, [])

	return (
		<div id="main-div"
			 className={"flex w-fit gap-3 relative mx-auto mt-60 bg-white p-3 rounded-b-lg rounded-tr-lg shadow-md"}>

			<div className={"absolute top-[-23px] left-0 rounded-t-lg z-0"}>
				<div className={"absolute bottom-[-8px] w-[140px] h-[9px] bg-white "}></div>
				<select
					onChange={(e) => handleOnChange([...document.querySelectorAll(".card")], e.target.value)}
					name="cities"
					defaultValue="Ankara"
					className={"rounded-t-lg outline-none text-center z-20 text-gray-700 shadow-md cursor-pointer"}>
					{cities.map((city, index) => {
							if (city.name === "Ankara") {
								return <option key={index} value={city.name}>{city.name}</option>
							} else {
								return <option key={index} value={city.name}>{city.name}</option>
							}
						}
					)}
				</select>
			</div>
			<div className={"w-[748px] hidden h-[134px] bg-gray-100 rounded-lg animate-pulse"}></div>
			{orderedDays.map((day, index) => (
				<Card key={index} day={day} dayNum={index}/>
			))}
		</div>
	)
}

export default Weather