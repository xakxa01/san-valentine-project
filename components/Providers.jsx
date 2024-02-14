"use client"

import { NextUIProvider } from '@nextui-org/react'

const Providers = ({ children }) => (
	<NextUIProvider>
		{children}
	</NextUIProvider>
);

export default Providers;
