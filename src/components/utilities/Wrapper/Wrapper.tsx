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

export const Wrapper = ({ children, ...rest }: WrapperProps) => (
	<div {...rest}>{children}</div>
);
