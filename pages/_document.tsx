// ** Imports ** //

// * NEXTjs * //
import Document, {Head, Html, Main, NextScript} from 'next/document';

// * React * //
import React from 'react';

// Component: Document HTML
class MyDocument extends Document {
	render() {
		return (

			<Html>
				<Head>
					<meta charSet="utf-8" lang="en"/>
					{/* Custom fonts */}
				</Head>

				<body
					className="bg-[#fee9f7]"
				>
					<Main />
					<NextScript />
				</body>

			</Html>

		);
	}
}

// ** Exports ** //
export default MyDocument;

