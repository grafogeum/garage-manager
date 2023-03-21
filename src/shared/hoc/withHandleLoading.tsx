import {
	ReactNode,
	ComponentType,
	PropsWithChildren,
	forwardRef,
	Ref
} from 'react';
import { LoadingSpinner } from '../LoadingSpinner';

type WithHandleLoadingProps<T> = {
	loading: boolean;
	children?: ReactNode;
} & T;

export function withHandleLoading<T>(
	WrappedComponent?: ComponentType<PropsWithChildren<T>>
) {
	if (!WrappedComponent) {
		throw new Error('withHandleLoading requires a WrappedComponent.');
	}

	const WithHandleLoadingHOC = forwardRef<Ref<T>, WithHandleLoadingProps<T>>(
		(props, ref) => {
			const { loading, children, ...rest } = props;

			if (loading) {
				return <LoadingSpinner />;
			}

			if (!WrappedComponent) {
				return <div>Error: WrappedComponent not provided.</div>;
			}

			return (
				<WrappedComponent ref={ref} {...(rest as T)}>
					{children}
				</WrappedComponent>
			);
		}
	);

	WithHandleLoadingHOC.displayName = `withHandleLoading(${
		WrappedComponent.displayName || WrappedComponent.name || 'Component'
	})`;

	return WithHandleLoadingHOC;
}

// Prev version of withHandleLoading: !!!

// import { ReactNode } from 'react';
// import { LoadingSpinner } from '../LoadingSpinner';

// export const withHandleLoading = (
// 	WrappedComponent: React.ComponentType<
// 		JSX.IntrinsicAttributes & { children?: ReactNode }
// 	>
// ) => {
// 	const WithHandleLoadingHOC = ({
// 		loading,
// 		passThroughProps
// 	}: {
// 		loading: boolean;
// 		passThroughProps?: React.ReactElement;
// 	}) => {
// 		if (loading) return <LoadingSpinner />;
// 		return <WrappedComponent {...passThroughProps} />;
// 	};

// 	WithHandleLoadingHOC.displayName = `withHandleLoading(${
// 		WrappedComponent.displayName || WrappedComponent.name || 'Component'
// 	})`;

// 	return WithHandleLoadingHOC;
// };
