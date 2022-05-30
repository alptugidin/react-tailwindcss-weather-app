const Card = ({day, currentDay, min, max}) => {

	const darkBg = day === currentDay ? " bg-gray-100" : ""

	return (
		<div
			className={"card w-[80px] h-[110px] relative border border-gray-100 cursor-default transition-opacity hover:bg-gray-100 rounded-lg" + darkBg}>
			<p className={"text-center text-sm text-gray-400"}>{day}</p>
			<img alt="cloudy" src="/rainy-2.svg" className={"mx-auto"}/>
			<span className={"absolute left-2 text-gray-700"}>{max}°</span>
			<span className={"absolute right-2 text-gray-400"}>{min}°</span>
		</div>
	)
}

export default Card