import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Home from './components/Home'
import Pokemons from './components/Pokemons'
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
  {
    path: "pokemons",
    element: (
      <>
        <Header></Header>
        <Pokemons></Pokemons>
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
