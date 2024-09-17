import { Center, Text } from '@chakra-ui/react';
import React, { Component, ReactNode } from 'react';
import { FONT_SIZE } from '../styles/tokens/typography';
import { TextVariant } from '../styles/components/Text';
import { COLORS } from '../styles/tokens/colors/constant';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by Error Boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Center>
                <Text fontSize={FONT_SIZE['6xl']} variant={TextVariant.semibold24} color={COLORS.Red[500]}>An error occurred.</Text>
            </Center>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
