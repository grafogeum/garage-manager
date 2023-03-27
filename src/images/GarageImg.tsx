import React from 'react';

export const GarageImg = ({ garageImg }: { garageImg: string }) => (
	<svg
		width="250px"
		height="150px"
		viewBox="0 0 250 150"
		// preserveAspectRatio="xMidYMid slice"
		style={{
			backgroundImage: `url("${garageImg || '../images/garage.png'}")`,
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			border: '2px solid black'
		}}
	/>
);
