import { useContext } from 'react';
import { GarageContext } from './Garage/GarageContext';
import { GarageCard } from './Garage/GarageCard';
import { withHandleLoading } from '../shared/hoc/withHandleLoading';
import { covertStyleParam, Garage } from '../types';
import { Button } from './utilities/Buttons/Button';

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
					garage.map(({ id, index }: Pick<Garage, 'id' | 'index'>) => (
						<GarageCard key={id} id={id} index={index} />
					))}
			</div>
			<Button onClick={handleRetry}>Load More</Button>
		</>
	);
};

export const GarageCardsWithHOC = withHandleLoading(GarageCards);
