import { useContext } from 'react';
import { GarageContext } from './Garage/GarageContext';
import { GarageCard } from './Garage/GarageCard';
import { withHandleLoading } from '../shared/hoc/withHandleLoading';
import { covertStyleParam, Garage } from '../types';

const GarageCardsStyled = covertStyleParam({
	display: 'flex',
	width: '100%',
	boxSizing: 'border-box',
	justifyContent: 'space-around',
	alignItems: 'center',
	flexDirection: 'row',
	flexWrap: 'wrap'
});

const GarageCards = () => {
	const {
		garage,
		handlers: { handleRetry }
	} = useContext(GarageContext);

	return (
		<>
			<div style={GarageCardsStyled}>
				{garage &&
					garage.map(({ id, contact, index }: Garage, i: number) => (
						<GarageCard key={id} id={id} contact={contact} index={index} />
					))}
			</div>
			<button
				style={{
					width: '320px',
					height: '100px',
					backgroundColor: '#2244ee',
					borderRadius: '10px',
					border: 'none'
				}}
				onClick={handleRetry}
			>
				Retry
			</button>
		</>
	);
};

export const GarageCardsWithHOC = withHandleLoading(GarageCards);
