import { useState, useContext } from 'react';
import { Garage, covertStyleParam } from '../../types';
import { GarageContext } from './GarageContext';
import { GarageImg } from '../../images/GarageImg';

const garageCardStyled = covertStyleParam({
	display: 'flex',
	padding: '1rem',
	margin: '1rem',
	width: '100%',
	height: '300px',
	maxHeight: '300px',
	maxWidth: '300px',
	flexDirection: 'column',
	border: '1px solid black',
	borderRadius: '10px',
	cursor: 'pointer'
});

const garageCardClickedStyled = {
	...garageCardStyled,
	borderColor: 'blue',
	backgroundColor: 'lightblue'
};

export const GarageCard = ({
	index,
	contact,
	id = '0',
	type,
	price,
	availability,
	sizes,
	// images,
	...rest
}: Partial<Omit<Garage, 'images'>> & {
	clicked?: boolean;
	handleSelection?: (id: string) => void;
	index: number | undefined;
}) => {
	const [clicked, setClicked] = useState(false);
	const {
		handlers: { handleSelection }
	} = useContext(GarageContext);
	const selectCard = () => {
		const indexSelected = index?.toString() ?? '0';
		handleSelection?.(indexSelected);
		setClicked(!clicked);
	};

	return (
		<div
			onClick={selectCard}
			style={clicked ? garageCardClickedStyled : garageCardStyled}
		>
			{index && <div>Number: {index}</div>}
			<GarageImg garageImg={'https://source.unsplash.com/random'} />
			{contact && <div>Number: {contact.phone}</div>}
			{price && <div>Number: {price}</div>}
			{availability && <div>Number: {availability}</div>}
			{type && <div>Number: {type}</div>}
		</div>
	);
};
