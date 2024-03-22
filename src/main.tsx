import './assets/normalize.css'
import 'virtual:windi.css'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StoresProvider, stores } from './store'

const domContainer: HTMLElement =
  document.getElementById('root') || document.createElement('div')
const root = createRoot(domContainer)
root.render(
  <Suspense>
    <StoresProvider value={stores}>
      <App></App>
    </StoresProvider>
  </Suspense>
)
