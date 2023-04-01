import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import ReportarProblema from '../Components/ReportarProblema/ReportarProblema';

const ReportarView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='fondo'
			h={!isMobile && '100vh'}
			align='center'
			justify='center'
			paddingBottom={!isMobile && '75px'}
			p={isMobile && 5}
		>
			<ReportarProblema />
		</Stack>
	);
};

export default ReportarView;
