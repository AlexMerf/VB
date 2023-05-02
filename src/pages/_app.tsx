'use client'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import '@/styles/globals.scss'
import '@/styles/reset.scss'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
