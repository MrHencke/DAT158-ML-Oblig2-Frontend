import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import HasResults from './HasResult';

const Results = () => {
	const { state }: any = useLocation();
	const history = useHistory();
	console.log(state);
	const [time, setTime] = useState(5);

	useEffect(() => {
		if (time >= 0 && state === undefined) {
			const timerID = setInterval(() => tick(), 1000);
			return () => {
				clearInterval(timerID);
			};
		}
	});

	const tick = () => {
		setTime(time - 1);
	};

	if (time === 0) history.push('/');

	return (
		<div style={{ textAlign: 'center' }}>
			{state === undefined ? (
				<div>
					<p>There are no results to show</p>
					<p>Redirecting to home page in: {time} </p>
				</div>
			) : (
				<HasResults state={state} />
			)}
		</div>
	);
};

export default Results;
