import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useGetPageNumber = () => {
	const [pageNumber, setPageNumber] = useState('00');
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			setPageNumber('00');
		}
		if (location.pathname === '/projects') {
			setPageNumber('01');
		}
		if (location.pathname === '/about') {
			setPageNumber('02');
		}
		if (location.pathname === '/contacts') {
			setPageNumber('03');
		}
	}, [location.pathname]);
	return pageNumber;
};
