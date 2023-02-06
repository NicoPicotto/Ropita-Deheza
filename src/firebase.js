import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: 'AIzaSyCWKcUf1KCNhG5RSnrAbT2qcwFpHDNb72w',
	authDomain: 'ropa-deheza.firebaseapp.com',
	projectId: 'ropa-deheza',
	storageBucket: 'ropa-deheza.appspot.com',
	messagingSenderId: '879081183263',
	appId: '1:879081183263:web:71c48edec3d472eff2dd2a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);