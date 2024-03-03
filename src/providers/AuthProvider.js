'use client';
import { useContext, createContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const authInfo = {
		user
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
