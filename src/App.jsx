import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Home from './components/Home'
import Footer from './components/Footer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </>
    ),
    errorElement: <h1>Ruta no valida</h1>
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
