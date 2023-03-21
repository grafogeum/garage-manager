import React from 'react';

export const GarageImg = ({ garageImg }: { garageImg: string }) => (
	<svg width="300" height="300">
		<image
			href={garageImg || '../images/garage.png'}
			x="0"
			y="0"
			width="300"
			height="300"
		/>
	</svg>
);
