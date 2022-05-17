import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
	return (
		<div>
			<div>Navigation</div>
			<Outlet />
		</div>
	);
}
