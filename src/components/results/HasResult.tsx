import Resizer from 'react-image-file-resizer';
import { useEffect, useState } from 'react';

const HasResults = ({ state }: any) => {
	const [resized, setResized] = useState<any>();
	let response = state[0];
	let original = state[1];
	let originalURL = URL.createObjectURL(original);
	useEffect(() => {
		resizeFile(original);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const resizeFile = (file: any) => {
		try {
			Resizer.imageFileResizer(file, 28, 28, 'JPEG', 100, 0, (uri) => {
				setResized(uri);
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<p>Placeholder for results page</p>
			{state === undefined ? (
				<p>There are no results to show</p>
			) : (
				<>
					<p>Your original picture:</p>
					<img src={originalURL} alt='' style={{ height: '17rem', width: '17rem' }} />
					<p>This is what our model sees:</p>
					<img
						src={resized}
						alt=''
						style={{
							height: '17rem',
							width: '17rem',
							filter: 'grayscale() invert()',
						}}
					/>
					<p>We think your picture is of a:</p>
					{response}
				</>
			)}
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
