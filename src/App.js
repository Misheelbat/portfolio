import PageContainer from './components/pagesContainer/PageContainer';
import Navbar from './pages/navbar/Navbar';
import Circles from './components/Elements/circle/Circles';
import './App.css';

function App() {
	return (
		<div className="App">
			<Circles />
			<Navbar />
			<PageContainer />
		</div>
	);
}

export default App;
