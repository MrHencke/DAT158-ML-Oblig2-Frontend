/* eslint-disable @typescript-eslint/no-unused-vars */

import { AxiosResponse } from 'axios';
import API from '../../config/API';
//import Results from '../results/Results';
import { ChangeEvent, FormEvent, useState } from 'react';
const Upload = () => {
	const [form, setForm] = useState<FormData>();
	const [response, setResponse] = useState<AxiosResponse>();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== null) {
			console.log(e.target.value);
			//setForm(e.target.value);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		API.post(`/api/ml`, form).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	};

	return (
		//TODO Create a more react-like form for upload, integrate axios request/response

		<div>
			<form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
				<input className='form' type='file' name='file' onChange={handleChange} />
				<div style={{ height: '3rem' }} />

				<input className='form' type='submit' />
			</form>
		</div>
	);
};

export default Upload;
