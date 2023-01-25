import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { CourseProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<CourseProvider>
				<App />
			</CourseProvider>
		</ChakraProvider>
	</React.StrictMode>
);
