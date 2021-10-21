import { ResponsiveBar } from '@nivo/bar';
const HasResults = ({ state }: any) => {
	let response = state[0];
	let file = state[1];
	let originalURL = URL.createObjectURL(file);

	return (
		<div>
			<p>Placeholder for results page</p>

			<>
				<p>Your original picture:</p>
				<img src={originalURL} alt='' style={{ height: '17rem', width: '17rem' }} />
				<p>This is what our model sees:</p>
				<img
					src={response.processed_image}
					alt=''
					style={{ height: '17rem', width: '17rem' }}
				/>
				<p>We think your picture is of a:</p>
				{response.top_prediction}
			</>
		</div>
	);
};

export default HasResults;

/*
					<ul>
						{state.map((s: any) => {
							return <li> {`${s}`} </li>;
						})}
					</ul>
*/
