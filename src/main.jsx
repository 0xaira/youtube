import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Provider } from 'react-redux';
import appStore from './utils/appStore.jsx'
import Body from './components/Body.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
    <Header />
    <Body/>
    </React.StrictMode>,
  </Provider>,
  
)
