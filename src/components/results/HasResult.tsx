import { Bar, BarChart, BarLabel, BarSeries } from 'reaviz';

const HasResults = ({ state }: any) => {
	let parsedResponse = JSON.parse(state[0]);
	let file = state[1];
	let originalURL = URL.createObjectURL(file);

	return (
		<>
			<div style={{ width: '50%', float: 'left' }}>
				<h1>Interpretation of original picture</h1>
				<p>Your original picture:</p>
				<img src={originalURL} alt='' style={{ height: '17rem', width: '17rem' }} />
				<p>This is what our model sees:</p>
				<img
					src={parsedResponse.processed_image}
					alt=''
					style={{ height: '17rem', width: '17rem' }}
				/>
				<p>We think your picture is of a:</p>
				{parsedResponse.o_top_prediction}

				<p>Here is how certain we are of the result</p>
				<br />

				<div style={{ height: '17rem', width: '50vw' }}>
					<BarChart
						data={parsedResponse.o_certainties}
						series={
							<BarSeries
								bar={<Bar label={<BarLabel position={'top'} fill='white' />} />}
							/>
						}
					/>
				</div>
				<br />
				<br />
			</div>

			<div style={{ width: '50%', float: 'right' }}>
				<h1>Interpretation of flipped picture</h1>
				<p>Your flipped picture:</p>
				<img
					src={originalURL}
					alt=''
					style={{ height: '17rem', width: '17rem', transform: 'scaleX(-1)' }}
				/>
				<p>This is what our model sees:</p>
				<img
					src={parsedResponse.processed_image}
					alt=''
					style={{ height: '17rem', width: '17rem', transform: 'scaleX(-1)' }}
				/>
				<p>We think your picture is of a:</p>
				{parsedResponse.f_top_prediction}

				<p>Here is how certain we are of the result</p>
				<br />

				<div style={{ height: '17rem', width: '50vw' }}>
					<BarChart
						data={parsedResponse.f_certainties}
						series={
							<BarSeries
								bar={<Bar label={<BarLabel position={'top'} fill='white' />} />}
							/>
						}
					/>
				</div>
				<br />
				<br />
			</div>
		</>
	);
};

export default HasResults;
