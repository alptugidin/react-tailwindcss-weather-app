import {useForecast} from "../context";
import {useEffect, useState} from "react";


const partOfDay = () => {
	const date = new Date();
	const hours = date.getHours();
	if (hours < 12) {
		return 'morn';
	} else if (hours < 18) {
		return 'day';
	} else if (hours < 24) {
		return 'eve';
	} else {
		return 'night';
	}
};

const darkBg = (num) => {
		return 	num === 0 ? " bg-gray-100" : ""
}


const Card = ({day, dayNum}) => {

	const context = useForecast()

	const stats = {
		weather: "",
		morn: 0,
		day: 0,
		eve: 0,
		night: 0,
		max: 0,
		min: 0,
	}

	const [info, setinfo] = useState(stats)

	useEffect(() => {
		if (context.city !== undefined) {
			setinfo({
				weather: context.city.daily[dayNum].weather[0].description,
				morn: Math.round(context.city.daily[dayNum].temp.morn),
				day: Math.round(context.city.daily[dayNum].temp.day),
				eve: Math.round(context.city.daily[dayNum].temp.eve),
				night: Math.round(context.city.daily[dayNum].temp.night),
				max: Math.round(context.city.daily[dayNum].temp.max),
				min: Math.round(context.city.daily[dayNum].temp.min),
			})
		}
	}, [context, dayNum])


	return (
		<div
			className={"card w-[90px] h-[135px] relative border border-gray-100 cursor-default transition-opacity hover:bg-gray-100 rounded-lg" + darkBg(dayNum)}>
			<p className={"text-center text-sm text-gray-400"}>{day}</p>
			<img alt="cloudy" src="/rainy-2.svg" className={"mx-auto" +( dayNum !== 0 ? " mt-3" : "") }/>
			<p className={"text-center text-gray-800 text-lg animate-pulse"}>{dayNum === 0 ? info[partOfDay()] + "°" : ""}</p>
			<p className={"absolute left-2 bottom-0 font-semibold text-red-400"}>{info.max}°</p>
			<p className={"absolute right-2 bottom-0 font-semibold text-green-400"}>{info.min}°</p>
		</div>
	)
}

export default Card