import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
	return (
		<MuiThemeProvider>
			<div>
				<Navbar />
				<Search />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
