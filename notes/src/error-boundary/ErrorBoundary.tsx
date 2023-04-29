import React, { Component, ErrorInfo, ReactNode } from 'react';
import Error from '../error/Error';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <Error />;
		}

		return this.props.children;
	}
}
