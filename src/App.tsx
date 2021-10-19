import { AxiosResponse } from 'axios';
import { useState } from 'react';
import './App.css';
import Upload from './components/upload/Upload';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Upload />
			</header>
		</div>
	);
}

export default App;
