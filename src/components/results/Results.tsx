import { useLocation } from 'react-router-dom';

const Results = () => {
	const { state }: any = useLocation();
	return (
		<div>
			<p>Placeholder for results</p>
			{state == null ? (
				<p>There are no results to show</p>
			) : (
				<>
					<p>Current state contains:</p>
					<ul>
						{state.map((s: any) => {
							return <li> {`${s}`} </li>;
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default Results;
