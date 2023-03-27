export interface Garage {
	id: string;
	contact: { phone: string; email: string };
	clicked?: boolean;
	index?: number;
	floor?: number;
	type: string;
	availability: boolean;
	price: number;
	sizes: number[];
	images?: string[];
}

export type GarageType = {
	ground: string;
	underground: string;
	roofed: string;
	outdoor: string;
};

type StyleParameter = {
	[key: string]: string | number;
};

export type Handlers = {
	handleSelection?: (id: string) => void;
	handleRetry?: () => void;
};

export interface GarageDataProps {
	data: Array<Garage>;
	loading: boolean;
	error: null | void | {};
	handlers?: Handlers;
}

type GarageWithHandlers = {
	garage: Garage[];
	handlers: Handlers;
};

export interface GarageProviderProps {
	children: React.ReactElement;
	value: GarageWithHandlers;
	handlers?: Handlers;
}

export const covertStyleParam = (StyleParam: StyleParameter) => StyleParam;
