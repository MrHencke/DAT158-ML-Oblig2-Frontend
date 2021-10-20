import { useLocation } from 'react-router-dom';

const Results = () => {
	const { state }: any = useLocation();
	console.log(state.response);
	return (
		<div>
			<p>Placeholder for results page</p>
			{state == null ? (
				<p>There are no results to show</p>
			) : (
				<>
					<p>Your original picture:</p>
					<img src={state.original} alt='' />
					{/*<p>This is what our model sees:</p>
					<img src={state.response} alt="" />*/}
					<p>We think your picture is of a:</p>
					{state}
				</>
			)}
		</div>
	);
};

export default Results;


/*
					<ul>
						{state.map((s: any) => {
							return <li> {`${s}`} </li>;
						})}
					</ul>
*/
