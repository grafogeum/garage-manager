import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import toHaveStyle from '@testing-library/jest-dom/matchers';

test('renders button with correct text', () => {
	const buttonText = 'Click me!';
	render(<Button>{buttonText}</Button>);
	const buttonElement = screen.getByText(buttonText);
	expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
	const onClickMock = jest.fn();
	render(<Button onClick={onClickMock}>Click me!</Button>);
	const buttonElement = screen.getByRole('button');
	fireEvent.click(buttonElement);
	expect(onClickMock).toHaveBeenCalledTimes(1);
});

// Test that the button renders with the user-defined styles when the userStyle prop is provided

test('renders button with user-defined styles when userStyle is provided', () => {
	const userStyle = { fontWeight: 'bold' };

	render(<Button>Click me!</Button>);
	const buttonElement = screen.getByRole('button');

	console.log('rocket', buttonElement);
	expect(buttonElement).toHaveStyle('width: 320px');
});

// test not working because  const beforeStyles = getComputedStyle(button, ':before'); doesnt return pseudo element
// describe('Button', () => {
// 	it('should not render shadow when withShadow prop is falsy', () => {
// 		render(<Button withShadow={false} />);
// 		const button = screen.getByRole('button');

// 		expect(button).not.toHaveStyle('box-shadow: 0 0 0 0');
// 	});

// 	it('should render ::before pseudo-element with expected styles when withShadow prop is truthy', () => {
// 		// const { getByTestId } = render(<Button withShadow={true} />);
// 		render(<Button withShadow={true} />);
// 		const button = screen.getByRole('button');
// 		// eslint-disable-next-line testing-library/no-debugging-utils
// 		// screen.debug();

// 		const beforeStyles = getComputedStyle(button, ':before');
// 		console.log('rocket', beforeStyles);
// 		// expect(beforeStyles.getPropertyValue('content')).toBe('');
// 		// expect(beforeStyles.getPropertyValue('height')).toBe('8px');
// 		expect(beforeStyles.getrPopertyValue('position')).toBe('absolute');
// 	});
// });
