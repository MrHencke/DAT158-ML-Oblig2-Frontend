import { AxiosResponse } from 'axios';
import API from '../../config/API';
import { useState } from 'react';

const Upload = () => {
	const [response, setResponse] = useState<AxiosResponse>();

	return (
		<div>
			<form
				action='http://localhost:5000/uploader'
				method='POST'
				encType='multipart/form-data'
			>
				<input type='file' name='file' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Upload;
