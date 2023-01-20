import { Provider } from 'react-redux'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { AnimatePresence } from 'framer-motion'
import { store , persistor } from '../redux/store'
import { inter } from '../config/font'

import '../styles/globals.css'
import '../styles/custom.scss'
import '../styles/media.scss'

export default function App({ Component, pageProps }) {
  return (      
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          
        <main className={inter.className}>
      <AnimatePresence
        mode='sync'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
            <Component {...pageProps} />
          </AnimatePresence>
        </main>
      </PersistGate>
    </Provider>
  )
}
