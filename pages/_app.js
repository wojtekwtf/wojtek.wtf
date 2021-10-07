import PlausibleProvider from 'next-plausible'

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="wojtek.wtf">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
