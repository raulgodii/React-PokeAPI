
import { Link, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Game() {
    let [pokemonMaquetado, setPokemonMaquetado] = useState();
    let [puntuation, setPuntuation] = useState(0);
    let solution;

    useEffect(() => {
        initGame();
    }, []);

    function initGame() {

        cargarPokemons()
            .then((pokemons) => {
                // Seleccionar un pokemon aleatorio
                solution = pokemons[Math.floor(Math.random() * pokemons.length)];

                setPokemonMaquetado(
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <img className="imgShowdown" src={solution.image} alt={solution.name} />
                        </div>
                        <div class="search-input d-flex justify-content-center">
                            {pokemons.map((pokemon, index) => (

                                <button onClick={() => handleOption(pokemon.name)} key={index} class="shadow__btn mx-2">
                                    {pokemon.name}
                                </button>
                            ))}
                        </div>

                    </div>
                );
            });
    }

    async function cargarPokemons() {
        let pokemons = []; // Array para almacenar los datos de los pokemons

        // Array para almacenar todas las promesas de fetch
        let fetchPromises = [];

        // Realizar 3 peticiones
        for (let i = 0; i < 3; i++) {
            let randomPokemonId = Math.floor(Math.random() * 898) + 1;
            let fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId)
                .then((response) => response.json())
                .then((pokemon) => {
                    console.log(pokemon);

                    // Crear objeto con nombre e imagen del pokemon
                    let pokemonData = {
                        name: pokemon.name,
                        image: pokemon.sprites.other['showdown'].front_default
                    };

                    return pokemonData;
                });

            fetchPromises.push(fetchPromise);
        }

        // Esperar a que todas las promesas se resuelvan
        await Promise.all(fetchPromises)
            .then((results) => {
                pokemons = results;
            });

        return pokemons;
    }

    function handleOption(namePokemon) {
        if (namePokemon === solution.name) {
            setPuntuation(++puntuation);
            setPokemonMaquetado(
                <div class="col-lg-12">
                    <div class="section-heading">
                        <img src={solution.image} alt={solution.name} />
                    </div>
                    <div class="search-input d-flex justify-content-center">
                            <h5 style={{color: 'green'}}>Correct!</h5><br/><br/>
                        </div>
                    <div class="search-input d-flex justify-content-center">
                        <button class="shadow__btn btnGreen mx-2">
                            {solution.name}
                        </button>
                    </div>
                </div>
            );
            setTimeout(() => {
                initGame();
            }, 2000);
        } else {
            setPokemonMaquetado(
                <div class="col-lg-12">
                    <div class="section-heading">
                        <img src={solution.image} alt={solution.name} />
                    </div>
                    <div class="search-input d-flex justify-content-center">
                            <h5 style={{color: 'red'}}>Incorrect!</h5><br/><br/>
                        </div>
                    <div class="search-input d-flex justify-content-center">
                        <button class="shadow__btn btnRed mx-2">
                            {solution.name}
                        </button>
                    </div>
                </div>
            );
        }
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Game</h3>
                            <span className="breadcrumb"><a href="#">Home</a> &gt; Game</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section cta">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="shop">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-heading">
                                            <h6>Guess the Pokemon</h6>
                                            <h2>Who's that pokemon?</h2>
                                        </div>
                                        <h5>Your puntuation: {puntuation}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-2 align-self-end">
                            <div class="subscribe">
                                <div class="row">
                                    {pokemonMaquetado}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game
