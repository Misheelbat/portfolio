import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from 'pages/navbar/Navbar';
import Circles from 'components/Elements/circle/Circles';
import Home from 'pages/home/Home';
import Projects from 'pages/projects/Projects';
import About from 'pages/about/About';
import Contacts from 'pages/contacts/Contacts';

import './App.css';
function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Circles page={location.pathname} />
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
