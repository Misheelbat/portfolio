import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
