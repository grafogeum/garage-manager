import { GarageDataProps } from '../../types';

export const handleSelection = (itemId: string, garage: GarageDataProps) => {
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

		return garage;
	} catch (error) {
		console.error('An error occurred:', error);
	}
};
