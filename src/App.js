import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './pages/navbar/Navbar';
import Circles from './components/Elements/circle/Circles';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import './App.css';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Circles />
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
