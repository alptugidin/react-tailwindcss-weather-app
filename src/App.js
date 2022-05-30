import {ContextProvider} from "./context";
import Weather from "./components/Weather";


function App() {
	return (
		<div className={"p-10"}>
			<ContextProvider>
				<Weather/>
			</ContextProvider>
		</div>
	);
}

export default App;
