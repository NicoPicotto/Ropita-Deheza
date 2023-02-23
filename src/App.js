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
import AgregarProductoView from './Views/AgregarProductoView';
import ProductoView from './Views/ProductoView';
import HelpView from './Views/HelpView';
import Footer from './Components/Footer/Footer';
import ScrolToTop from './Components/ScrollToTop/ScrollToTop';
import "@fontsource/titan-one"
import "@fontsource/montserrat"

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<ContextProvider>
				<Router>
					<ScrolToTop />
					<Navbar />
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/login' element={<LoginView />} />
						<Route path='/register' element={<RegisterView />} />
						<Route path='/:id' element={<ProfileView />} />
						<Route path='/nuevo' element={<AgregarProductoView />} />
						<Route path='/producto/:id' element={<ProductoView />} />
						<Route path='/ayuda' element={<HelpView />} />
					</Routes>
					<Footer />
				</Router>
			</ContextProvider>
		</ChakraProvider>
	);
};

export default App;
