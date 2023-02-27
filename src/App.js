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
import '@fontsource/titan-one';
import '@fontsource/montserrat';
import ReglasView from './Views/ReglasView';
import ErrorPage from './Views/ErrorPage';
import TutorialView from './Views/TutorialView';

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
						<Route path='/usuario/:id' element={<ProfileView />} />
						<Route path='/nuevo' element={<AgregarProductoView />} />
						<Route path='/producto/:id' element={<ProductoView />} />
						<Route path='/ayuda' element={<HelpView />} />
						<Route path='/reglas' element={<ReglasView />} />
						<Route path='/tutorial' element={<TutorialView />} />
						<Route path='*' element={<ErrorPage />} />
					</Routes>
					<Footer />
				</Router>
			</ContextProvider>
		</ChakraProvider>
	);
};

export default App;
