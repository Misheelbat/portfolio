import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const initialState = {
	number: '00',
	page: 'PORTFOLIO',
};

export const useGetPageInfo = () => {
	const [pageInfo, setPageInfo] = useState(initialState);
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setPageInfo(initialState);
				break;
			case '/projects':
				setPageInfo({ number: '01', page: 'PROJECTS' });
				break;
			case '/about':
				setPageInfo({ number: '02', page: 'ABOUT ME' });
				break;
			case '/contacts':
				setPageInfo({ number: '03', page: 'CONTACTS' });
				break;
			default:
				break;
		}
	}, [location.pathname]);
	return pageInfo;
};
