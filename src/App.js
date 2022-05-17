import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navigation from './pages/navigation/Navigation';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
