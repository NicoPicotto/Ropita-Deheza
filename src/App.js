import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './Context/Context';
import HomeView from './Views/HomeView';
import './App.css';
import LoginView from './Views/LoginView';
import Navbar from './Components/Navbar/Navbar';
import ProfileView from './Views/ProfileView';
import RegisterView from './Views/RegisterView';
import { useAuth } from './Context/Context';

const App = () => {

	return (
		<ChakraProvider theme={theme}>
			<ContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/login' element={<LoginView />} />
						<Route path='/register' element={<RegisterView />} />
						<Route path='/:id' element={<ProfileView />} />
					</Routes>
				</Router>
			</ContextProvider>
		</ChakraProvider>
	);
};

export default App;
