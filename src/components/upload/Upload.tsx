/* eslint-disable @typescript-eslint/no-unused-vars */

import { AxiosResponse } from 'axios';
import API from '../../config/API';
//import Results from '../results/Results';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Default } from 'react-spinners-css';
import { useHistory } from 'react-router-dom';

const Upload = () => {
	const history = useHistory();
	const [form, setForm] = useState<FormData>();
	const [backendStatus, setBackendStatus] = useState<Boolean>(false);
	const [response, setResponse] = useState<AxiosResponse>();

	useEffect(() => {
		API.get('/up').then((res) => {
			setBackendStatus(res.data === '1');
			console.log(res.data);
		});
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== null) {
			console.log(e.target.value);
			console.log(e.target);
			//setForm(e.target.value);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		API.post('/ml', form).then((res) => {
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
					<p className='form'>Waiting for backend to load</p>
				</div>
			)}
		</div>
	);
};

export default Upload;
