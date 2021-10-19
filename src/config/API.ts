import axios from 'axios';
import Constants from './constants';

let API = axios.create({
	baseURL: Constants.API_ROUTE,
	headers: {
		'Content-type': 'application/json',
	},
});

export default API;
