import { useLocation } from 'react-router-dom';
import HasResults from './HasResult';

const Results = () => {
	const { state }: any = useLocation();
	return (
		<div style={{ textAlign: 'center' }}>
			{state === undefined ? (
				<p>There are no results to show</p>
			) : (
				<HasResults state={state} />
			)}
		</div>
	);
};

export default Results;
