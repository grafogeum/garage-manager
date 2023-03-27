import styled from '@emotion/styled';
import { ReactNode } from 'react';

type WrapperPropsStyled = {
	backgroundColor?: string;
	textColor?: string;
	padding?: string;
	display?: string;
	[key: string]: unknown;
};

type WrapperProps = {
	children?: ReactNode;
} & WrapperPropsStyled;

const WrapperStyled = styled.div<WrapperPropsStyled>`
	background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
	color: ${({ textColor }) => textColor || 'black'};
	padding: ${({ padding }) => padding || '10px'};
	display: ${({ display }) => display || 'flex'};
	${({ ...rest }) =>
		Object.entries(rest)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ')}
`;

export const WrapperWithStyles = ({ children, ...rest }: WrapperProps) => (
	<WrapperStyled {...rest}>{children}</WrapperStyled>
);
