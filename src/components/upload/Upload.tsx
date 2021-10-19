/* eslint-disable @typescript-eslint/no-unused-vars */

import { AxiosResponse } from 'axios';
import API from '../../config/API';
//import Results from '../results/Results';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Default } from 'react-spinners-css';
import { useHistory } from 'react-router-dom';

const Upload = () => {
	const history = useHistory();
	const [file, setFile] = useState<File>();
	const [backendStatus, setBackendStatus] = useState<Boolean>(false);
	const [message, setMessage] = useState<String>('Waiting for ML service to start');

	useEffect(() => {
		API.get('/up').then((res) => {
			if (res.status === 200) {
				setBackendStatus(true);
			} else {
				setMessage('ML Service initialization failed. Try again later.');
			}
		});
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files) {
			console.log(e.currentTarget.value);
			console.log(e.currentTarget);
			console.log(typeof e.currentTarget.files[0]);
			setFile(e.currentTarget.files[0]);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		API.post('/ml', file).then((res) => {
			history.push({ pathname: '/results', state: res.data });
		});
	};

	return (
		<div>
			{backendStatus ? (
				<form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
					<input className='form' type='file' name='file' onChange={handleChange} />
					<div style={{ height: '3rem' }} />

					<input className='form' type='submit' />
				</form>
			) : (
				<div className='form'>
					<Default className='form' />
					<p className='form'>{`${message}`}</p>
				</div>
			)}
		</div>
	);
};

export default Upload;
