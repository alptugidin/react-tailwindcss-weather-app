import Card from "./Card";
import {useEffect, useState} from "react";
import {cities} from "./cities";

const Weather = () => {

	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const currentDay = days[new Date().getDay() - 1]
	const currentIndex = days.indexOf(currentDay)
	const arr1 = days.slice(currentIndex, days.length)
	const arr2 = days.slice(0, currentIndex)
	const orderedDays = [...arr1, ...arr2]
	const min = 15
	const max = 33

	const [cardsState, setCardsState] = useState([])

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


	useEffect(() => {
		const cards = [...document.querySelectorAll(".card")]
		cards.map(card => card.classList.add("opacity-0"))
		cardEffect(cards)

		setCardsState(cards)

	}, [])

	return (
		<div
			className={"flex w-fit gap-3 relative mx-auto mt-60 bg-white p-3 rounded-b-lg rounded-tr-lg shadow-md"}>
			<div className={"absolute top-[-23px] left-0 rounded-t-lg z-0"}>
				<div className={"absolute bottom-[-8px] w-[140px] h-[9px] bg-white "}></div>
				<select
					onChange={() => cardEffect(cardsState)}
					name="cities"
					defaultValue="Ankara"
					className={"rounded-t-lg outline-none z-20 text-gray-700 shadow-md cursor-pointer"}>
					{cities.map((city, index) => {
							if (city === "Ankara") {
								return <option key={index}  value={city}>{city}</option>
							} else {
								return <option key={index} value={city}>{city}</option>
							}
						}
					)}
				</select>
			</div>
			{orderedDays.map((day, index) => (
				<Card key={index} day={day} currentDay={currentDay} min={min} max={max}/>
			))}
		</div>
	)
}

export default Weather