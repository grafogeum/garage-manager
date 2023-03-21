import './App.css';
import { GarageData } from './containers/GarageData';
import { GarageProvider } from './components/Garage/GarageProvider';

function App() {
	const { render, garage, handlers } = GarageData();
	const garageData = garage?.data;
	return (
		<div className="App">
			<div className="glitch-wrapper">
				<div className="glitch" data-glitch="Garage 🔥">
					Garage 🔥
				</div>
			</div>
			<GarageProvider value={{ garage: garageData, handlers: handlers }}>
				{render}
			</GarageProvider>
		</div>
	);
}

export default App;
