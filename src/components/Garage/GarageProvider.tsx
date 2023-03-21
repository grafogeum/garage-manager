import { useMemo } from 'react';
import { GarageContext } from './GarageContext';
import { GarageProviderProps } from '../../types';

export const GarageProvider = ({
	children,
	value,
	handlers
}: GarageProviderProps): JSX.Element => {
	const memoizedValue = useMemo(
		() => ({ ...value, ...handlers }),
		[value, handlers]
	);

	return (
		<GarageContext.Provider value={memoizedValue}>
			{children}
		</GarageContext.Provider>
	);
};
