//import { ResponsiveBar } from '@nivo/bar';
const HasResults = ({ state }: any) => {
	let parsedResponse = JSON.parse(state[0]);
	console.log(parsedResponse);
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
					src={parsedResponse.processed_image}
					alt=''
					style={{ height: '17rem', width: '17rem' }}
				/>
				<p>We think your picture is of a:</p>
				{parsedResponse.top_prediction}
			</>
		</div>
	);
};

export default HasResults;
