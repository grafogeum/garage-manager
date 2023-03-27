import { ButtonHTMLAttributes, CSSProperties } from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	userStyle?: string | CSSProperties;
	withShadow?: boolean;
}
const ButtonStyled = styled.button<ButtonProps>`
	width: 320px;
	height: 100px;
	background-color: #2244ee;
	border-radius: 0px;
	border: none;
	cursor: pointer;
	user-select: text;
	-webkit-user-select: text;
	-moz-user-select: text;
	position: relative;
	border: 2px solid #25215a;

	${({ withShadow }) =>
		withShadow &&
		`
	 &::before {
		content: '';
		background-color: #25215a;
		position: absolute;
		bottom: -8px;
		height: 8px;
		width: calc(100% + 4px);
		left: 0;
		transform: skewX(45deg);
		border: 2px solid #000;
		box-sizing: border-box;
		border-top-left-radius: 4px;
		border-right-width: 1px;
	}
	&::after {
		content: '';
		background-color: #25215a;
		position: absolute;
		right: -8px;
		height: calc(100% + 4px);
		bottom: -4px;
		width: 8px;
		transform: skewY(45deg);
		border: 2px solid #000;
		box-sizing: border-box;
		border-top-left-radius: 4px;
		border-bottom-width: 1px;
	} 
	`}
`;

export const Button: React.FC<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> & { title?: string; withShadow?: boolean }
> = ({ title, children, style, withShadow, ...rest }) => {
	return (
		<ButtonStyled style={style} withShadow={withShadow} {...rest}>
			{title ?? children}
		</ButtonStyled>
	);
};
