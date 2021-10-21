import { Bar, BarChart, BarLabel, BarSeries } from 'reaviz';

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

				<p>Here is how certain we are of the result</p>
				<br />

				<div style={{ height: '17rem', width: '50vw' }}>
					<BarChart
						data={parsedResponse.certainties}
						series={
							<BarSeries
								bar={<Bar label={<BarLabel position={'top'} fill='white' />} />}
							/>
						}
					/>
				</div>
				<br />
				<br />
			</>
		</div>
	);
};

export default HasResults;
