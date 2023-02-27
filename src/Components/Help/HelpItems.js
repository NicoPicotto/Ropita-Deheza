import React from 'react';
import {
	AccordionItem,
	Box,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';

const HelpItems = ({ titulo, texto }) => {
	return (
		<AccordionItem>
			<AccordionButton _expanded={{ bg: 'cuarto', color: 'white' }}>
				<Box as='span' fontWeight="bold" flex='1' textAlign='left'>
					{titulo}
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>{texto}</AccordionPanel>
		</AccordionItem>
	);
};

export default HelpItems;
