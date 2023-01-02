// ** Imports ** //

// * NEXTjs  * //
import type {AppProps} from 'next/app';

// * React * //
import React from 'react';

// * Tailwindcss * //
import '../styles/globals.css';

// Component: Custom app wrapper
function MyApp({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />;
}

// ** Exports ** //
export default MyApp;
