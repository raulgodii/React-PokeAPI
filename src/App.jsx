import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import Login from './components/Login'
import Register from './components/Register'
import Detail from './components/Detail'
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
  {
    path: "login",
    element: (
      <>
        <Header></Header>
        <Login></Login>
        <Footer></Footer>
      </>
    ),
    errorElement: <h1>Ruta no valida</h1>
  },
  {
    path: "detail/:id",
    element: (
      <>
        <Header></Header>
        <Detail></Detail>
        <Footer></Footer>
      </>
    ),
    errorElement: <h1>Ruta no valida</h1>
  },
  {
    path: "register",
    element: (
      <>
        <Header></Header>
        <Register></Register>
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
