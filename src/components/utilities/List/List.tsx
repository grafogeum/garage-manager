import { ReactNode, MouseEvent } from 'react';

type ItemWithProperty<T extends ReactNode> = {
	item: T;
	property: string;
};

type ListProps<T extends ReactNode> = {
	items: T[];
	property: string[];
	style?: React.CSSProperties;
	onClick?: (event: MouseEvent<HTMLUListElement>) => void;
};

const ULStyled = ({
	userStyle
}: {
	userStyle?: React.CSSProperties;
}): React.CSSProperties => ({
	width: '320px',
	height: '100px',
	backgroundColor: '#2244ee',
	border: 'none',
	cursor: 'pointer',
	userSelect: 'text',
	WebkitUserSelect: 'text',
	MozUserSelect: 'text',
	...userStyle
});

export const List = <T extends ReactNode>({
	items,
	property,
	style,
	onClick,
	...rest
}: ListProps<T>) => {
	const itemsWithProperty: ItemWithProperty<T>[] = items.map((item, index) => ({
		item,
		property: property[index]
	}));

	const handleClick = (event: MouseEvent<HTMLUListElement>) => {
		event.stopPropagation();
		onClick ? onClick(event) : event.preventDefault();
	};

	// console.log(itemsWithProperty);
	return (
		<ul onClick={handleClick} style={ULStyled({ userStyle: style })} {...rest}>
			{itemsWithProperty.map((itemWithProperty) => (
				<li key={itemWithProperty.property}>
					<b>{itemWithProperty.property}:</b> {itemWithProperty.item}
				</li>
			))}
		</ul>
	);
};
