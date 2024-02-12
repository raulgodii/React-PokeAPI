import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import Login from './components/Login'
import Register from './components/Register'
import Detail from './components/Detail'
import Game from './components/Game'
import Error from './components/Error'
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
    errorElement: <>
      <Header></Header>
        <Error></Error>
        <Footer></Footer>
    </>
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
  },
  {
    path: "game",
    element: (
      <>
        <Header></Header>
        <Game></Game>
        <Footer></Footer>
      </>
    ),
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
