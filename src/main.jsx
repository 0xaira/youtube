import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import { Provider } from 'react-redux';
import appStore from './utils/appStore.jsx'
import Body from './components/Body.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer.jsx'
import WatchPage from './components/WatchPage.jsx'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <div>
    <Header />
    <RouterProvider router={appRouter} />
  </div>
</Provider>
  
)
