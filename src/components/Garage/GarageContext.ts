// import { defaultValue } from './GarageContext';
import { createContext } from 'react';
import { Garage, Handlers } from '../../types';

export const defaultValue: GarageAndHandlersInObject = {
	garage: [],
	handlers: {
		handleSelection: (id: string) => {},
		handleRetry: () => {}
	}
};

type GarageAndHandlersInObject = {
	garage: Garage[];
	handlers: Handlers;
};

export const GarageContext =
	createContext<GarageAndHandlersInObject>(defaultValue);
