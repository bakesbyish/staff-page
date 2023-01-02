// ** Imports ** //

// * React * //
import React from 'react';

// * Framer Motion * //
import {motion} from 'framer-motion';

// Props interface
interface Props {
	Title: string;
	Icon: React.JSXElementConstructor<any>;
	Text: string;
	Hidden: boolean;
}

const CopyLinkButton = ({Title, Icon, Text, Hidden}: Props) => {
	if (!Hidden) {
		return (
			<motion.button
				className="group rounded-xl bg-[#ff69b4] border border-b-[#ab4679] hover:bg-pink-600 hover:border-pink-800"
				onClick={() => {
					navigator.clipboard.writeText(Text);
				}}
				whileHover={{scale: 1.05}}
				whileTap={{scale: 0.90}}
			>
				<div className="flex py-4 px-6 sm:py-1 sm:px-5 md:py-3">
					<Icon />
					<span className="sm:ml-2 sm:mt-2 sm:text-3xl text-3xl px-1 text-btn-fnt text-pink-200">{Title}</span>
				</div>
			</motion.button>
		);
	}

	return (
		<motion.button
			className="group hidden sm:inline md:hidden lg:inline rounded-xl bg-[#ff69b4] border border-b-[#ab4679] hover:bg-pink-600 hover:border-pink-800"
			onClick={() => {
				navigator.clipboard.writeText(Text);
			}}
			whileHover={{scale: 1.05}}
			whileTap={{scale: 0.90}}
		>
			<div className="flex py-4 px-6 sm:py-1 sm:px-5 md:py-3">
				<Icon />
				<span className="sm:ml-2 sm:mt-2 sm:text-3xl text-3xl px-1 text-btn-fnt text-pink-200">{Title}</span>
			</div>
		</motion.button>
	);
};

// ** Exports ** //
export {CopyLinkButton};
