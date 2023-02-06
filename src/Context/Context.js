import React, { useState, createContext, useContext, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

export const RopitaContext = createContext({});

export const useAuth = () => {
	const context = useContext(RopitaContext);
	return context;
};

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);

	const registrarse = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => signOut(auth);

	const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

	useEffect(() => {
		const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubuscribe();
	}, []);

	return (
		<RopitaContext.Provider
			value={{ registrarse, login, logout, resetPassword, loading, user }}
		>
			{children}
		</RopitaContext.Provider>
	);
};
