import Weather from "./components/Weather";
import {WeatherProvider} from "./context";


function App() {
	return (
		<div className={"p-10 h-screen bg-[#F2F6FC]"}>
				<WeatherProvider>
					<Weather/>
				</WeatherProvider>
		</div>
	);
}

export default App;
