import { useEffect, useState } from 'react';

export const useAddClassInterval = (timer) => {
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('effect run');
			setToggle((prev) => !prev);
		}, timer);
		return () => clearInterval(interval);
	}, [timer]);
	return toggle;
};
