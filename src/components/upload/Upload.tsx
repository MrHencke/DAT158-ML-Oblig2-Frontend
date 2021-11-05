/* eslint-disable @typescript-eslint/no-unused-vars */

import API from '../../config/API';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Default } from 'react-spinners-css';
import { useHistory } from 'react-router-dom';

const Upload = () => {
	const history = useHistory();
	const [file, setFile] = useState<any>();
	const [error, setError] = useState<Boolean>();
	const [backendStatus, setBackendStatus] = useState<Boolean>(false);
	const [message, setMessage] = useState<String>('Waiting for ML service to start');
	const allowedFileFormats = ['jpg', 'jpeg', 'png', 'jfif'];

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
			if (
				allowedFileFormats.includes(
					e.currentTarget.files[0].name.split('.').pop()!.toLowerCase()
				)
			) {
				setFile(e.currentTarget.files[0]);
			} else {
				setError(true);
			}
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		let form = new FormData();
		form.append('file', file);

		API.post('/ml', form, config).then((res) => {
			history.push({ pathname: '/results', state: [JSON.stringify(res.data), file] });
		});
	};

	return (
		<div>
			{backendStatus ? (
				<>
					<form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
						<input
							className='form'
							type='file'
							name='file'
							accept='.png, .jpg, .jpeg, .jfif'
							onChange={handleChange}
						/>
						<div style={{ height: '3rem' }} />

						<input className='form' type='submit' />
					</form>
					{error && (
						<>
							<br />
							<p>Please input a valid file, only PNG and JPEG/JFIF is supported</p>
							<br />
						</>
					)}
				</>
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
