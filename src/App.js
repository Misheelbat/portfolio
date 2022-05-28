import Home from './pages/home/Home';
import Navigation from './pages/navigation/Navigation';
import Projects from './pages/projects/Projects';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Home />
			<Projects />
		</div>
	);
}

export default App;
