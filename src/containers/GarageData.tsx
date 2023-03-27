import { useState, useEffect, useCallback } from 'react';
import apiData from '../api';
import { GarageCardsWithHOC } from '../components/GarageCards';
import { Garage, GarageDataProps } from '../types';

async function retry(cb: () => Promise<Array<Garage>>, n: number) {
	let lastError;
	for (let i = 0; i < n; i++) {
		try {
			return await cb();
		} catch (e) {
			// throw new Error('error retry apiData')
			lastError = e;
		}
	}
	throw lastError;
}

export const GarageData = () => {
	const [garage, setGarage] = useState<GarageDataProps>({
		data: [],
		loading: true,
		error: null
	});

	const [retryCount, setRetryCount] = useState(0);

	const handleRetry = async () => {
		setRetryCount(retryCount + 1);
	};

	const memoizedSetGarage = useCallback((response: Garage[]) => {
		const indexDataResponse = (response: Garage[]) =>
			response.map((garage, i) => {
				const floor = Math.floor(i / 40) - 1;
				return { ...garage, index: i, floor };
			});

		setGarage((prevState) => ({
			...prevState,
			data: indexDataResponse([...prevState.data, ...response]),
			loading: false,
			error: null
		}));
	}, []);

	useEffect(() => {
		const getGarage = async () => {
			try {
				const safe = () => retry(apiData, 7);
				const response = await safe();
				memoizedSetGarage(response);
			} catch (error) {
				console.log('error', error);
				setGarage({
					data: [],
					loading: false,
					error: null
				});
			}
		};

		getGarage();

		return () => {};
	}, [memoizedSetGarage, retryCount]);

	const handleSelection = (itemId: string) => {
		try {
			const clickedGarageIndex = garage.data.findIndex(
				({ index }) => index === Number(itemId)
			);

			if (clickedGarageIndex === -1) {
				return;
			}

			const clickedGarage = garage.data[clickedGarageIndex];
			const nextIdIndex = garage.data.findIndex(
				(garage) => Number(garage.index) > Number(itemId) && !garage.clicked
			);
			const selectedGarage = garage.data.splice(clickedGarageIndex, 1)[0];
			clickedGarage.clicked = !clickedGarage.clicked;

			let insertIndex;
			if (clickedGarage.clicked) {
				insertIndex = 0;
			} else if (nextIdIndex === -1) {
				insertIndex = garage.data.length;
			} else {
				insertIndex = nextIdIndex - 1;
			}

			// const insertIndex = clickedGarage.clicked
			// 	? 0
			// 	: nextIdIndex === -1
			// 	? garage.data.length
			// 	: nextIdIndex - 1;

			garage.data.splice(insertIndex, 0, selectedGarage);

			setGarage((prevState) => ({ ...prevState, data: [...garage.data] }));
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	return {
		garage,
		handlers: {
			handleRetry,
			handleSelection
		},
		render: <GarageCardsWithHOC loading={garage.loading} />
	};
};
