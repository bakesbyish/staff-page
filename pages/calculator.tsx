// ** Imports ** //

// * NEXTjs * //
import {NextPage} from 'next';
import Head from 'next/head';

// * React * //
import React, {ChangeEventHandler, useState} from 'react';

// * HeadlessUI * //
import {Tab} from '@headlessui/react';

// Component: Calculator page
const Calculator: NextPage = () => {
	// Manage the tab state
	const [currentTab, setCurrentTab] = useState({
		firstTab: true,
		secondTab: false,
	});

	const FormUI = (props: {
		rate: number
	}) => {
		// Destructure the props
		const {rate} = props;

		// Store and change the initial bill value
		const [initialBillValue, setInitialBillValue] = useState(0);

		// Handle the change in the input feild
		const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
			event.preventDefault();
			setInitialBillValue(event.target.value as any);
		};

		return (
			<div
				className="flex flex-col items-center justify-center mt-16"
			>
				<input
					className="text-center text-4xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Bill amount"
					type="number"
					onChange={handleChange}
				/>
				{(initialBillValue !== 0 && initialBillValue !== null) ? (
					<>
						<label
							className="mt-16 text-4xl"
						>
							Increased amount
						</label>
						<label
							className="text-center mt-5 text-4xl"
						>
							{Math.ceil((Number(initialBillValue) * Number(rate)) / (1 - Number(rate)))}
						</label>
						<label
							className="mt-16 text-4xl"
						>
							Final amount
						</label>

						<label
							className="text-center mt-5 text-4xl"
						>
							{Math.ceil(Number(initialBillValue) + ((Number(initialBillValue) * Number(rate)) / (1 - Number(rate))))}
						</label>
					</>
				) : null}
			</div>
		);
	};

	return (

		<div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-20 text-center">
			<Head>
				<title>Calculator</title>
			</Head>

			<div className="flex flex-col items-center justify-center">
				<Tab.Group
					onChange={index => {
						if (index === 0) {
							setCurrentTab({
								firstTab: true,
								secondTab: false,
							});
						} else {
							setCurrentTab({
								firstTab: false,
								secondTab: true,
							});
						}
					}}
				>

					{/* Headings */}
					<Tab.List
						className="flex p-5 space-x-10 bg-[#ff69b4] rounded-lg"
					>
						<Tab
							className={`w-full py-5 px-5 text-4xl leading-5 font-medium text-white rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60 ${currentTab.firstTab ? 'bg-white text-black ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60' : ''} `}
						>
							Links
						</Tab>
						<Tab
							className={`w-full py-5 px-5 text-4xl leading-5 font-medium text-white rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60 ${currentTab.secondTab ? 'bg-white text-black ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60' : ''} `}
						>
							Barcode
						</Tab>

					</Tab.List>

					{/* Tab Pannels */}
					<Tab.Panels>

						{/* Link payments */}
						<Tab.Panel>
							<FormUI rate={0.02} />
						</Tab.Panel>

						{/* Barcode Payments */}
						<Tab.Panel>
							<FormUI rate={0.005} />
						</Tab.Panel>

					</Tab.Panels>
				</Tab.Group>

			</div>

		</div>

	);
};

// ** Exports ** //
export default Calculator;

