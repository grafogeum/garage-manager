import { useState, useContext, CSSProperties } from 'react';
import { Garage } from '../../types';
import { GarageContext } from './GarageContext';
import { GarageImg } from '../../images/GarageImg';
import { Button } from '../utilities/Buttons/Button';
import { List } from '../utilities/List/List';
import { WrapperWithStyles, Wrapper } from '../utilities/Wrapper';
import styled from '@emotion/styled';

const PillButton = styled.div`
	width: 90px;
	height: 30px;
	padding: 0px 10px;
	font: normal 900 16px/16px Avenir;
	color: #764abc;
	cursor: pointer;
	background-color: #ffffff;
	border-radius: 80px;
	border: none;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 10px;
`;

const garageCardStyled: CSSProperties = {
	display: 'flex',
	position: 'relative',
	padding: '0',
	margin: '1rem 0.1rem',
	width: '100%',
	height: '250px',
	maxHeight: '300px',
	maxWidth: '500px',
	flexDirection: 'row',
	border: '2px solid black',
	borderRadius: '0px',
	cursor: 'pointer',
	flexWrap: 'wrap'
};

const garageCardClickedStyled = {
	...garageCardStyled,
	borderColor: '#2244ee',
	backgroundColor: '#fba067'
};

const garageCardInfo: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	alignItems: 'flex-start',
	font: `1rem 'Roboto', sans-serif`,
	cursor: 'text',
	position: 'relative',
	margin: 0,
	padding: 0,
	width: '70%'
};

const garageCardImage: CSSProperties = {
	display: 'flex',
	width: '250px',
	height: '150px',
	boxSizing: 'border-box',
	padding: 0,
	margin: 0
};

const garageCardInfoList: CSSProperties = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	alignItems: 'flex-start',
	font: `1rem 'Roboto', sans-serif`,
	padding: '1rem 1rem 0 1rem',
	listStyleType: 'none',
	cursor: 'text',
	position: 'relative',
	backgroundColor: 'none',
	margin: 0
};

const TitleStyled = styled.h4`
	font: 1.2rem 'Roboto', sans-serif;
	font-weight: 800;
	color: black;
	margin: 0;
	padding: 1rem 1rem 0 1rem;
	&:hover {
		color: #2244ee;
	}
`;

export const GarageCard = ({
	index,
	id = '0',
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

	const GarageListNames = [
		'Number',
		'Contact',
		'Price',
		'Availability',
		'Type'
	];

	const selectedGarage = useContext(GarageContext).garage[index ?? 0];
	const { price, type, availability, contact } = selectedGarage
		? selectedGarage
		: { price: 0, type: '', availability: true, contact: { phone: '' } };

	const selectCard = () => {
		const indexSelected = index?.toString() ?? '0';
		handleSelection?.(indexSelected);
		setClicked(!clicked);
	};

	return (
		<Button
			onClick={selectCard}
			style={clicked ? garageCardClickedStyled : garageCardStyled}
			withShadow
		>
			<WrapperWithStyles style={{ width: '500px' }}>
				<Wrapper style={garageCardImage}>
					<GarageImg garageImg={'https://source.unsplash.com/random'} />
				</Wrapper>
				<Wrapper style={garageCardInfo}>
					<TitleStyled>Price {price}</TitleStyled>
					<List
						style={garageCardInfoList}
						items={[
							index,
							contact?.phone,
							price,
							availability ? 'available' : 'occupied',
							type
						]}
						property={GarageListNames}
					/>
				</Wrapper>
			</WrapperWithStyles>
			<Wrapper
				style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
			>
				<PillButton>
					<div style={clicked ? {} : { opacity: '0.2' }}>
						<span>Like 👍🏼</span>
					</div>
				</PillButton>
				<PillButton>
					<div style={clicked ? {} : { opacity: '0.2' }}>
						<span>Booking 📕 </span>
					</div>
				</PillButton>
			</Wrapper>
		</Button>
	);
};
