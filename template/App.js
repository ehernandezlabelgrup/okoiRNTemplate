/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler'
import React, { createContext } from 'react'
import './src/infrastructure/i18n'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/infrastructure/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import FlashMessage from 'react-native-flash-message'

import * as Sentry from '@sentry/react-native'
import ErrorBoundary from './src/infrastructure/Errors/ErrorBoundary'
import { sentry } from './react-native.config'

export const LocalizationContext = createContext()
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: sentry
  })
}

const App = () => {
  return (
     <ErrorBoundary>
       <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
             <Navigation />
             <FlashMessage position="top" floating={true} />
         </PersistGate>
       </Provider>
     </ErrorBoundary>
  )
}

export default App
