import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/index.css';
import Routes from './Routes';

function App() {
	return (
		<Router>
			<div className='app'>
				<Routes />
			</div>
		</Router>
	);
}

export default App;
