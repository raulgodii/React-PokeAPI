
import { Link, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Game() {
    let [pokemonMaquetado, setPokemonMaquetado] = useState();

    useEffect(() => {
        cargarPokemons();
    }, []);

    function cargarPokemons() {
        let randomPokemonId = Math.floor(Math.random() * 1302) + 1;
        fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId)
            .then((response) => response.json())
            .then((pokemon) => {
                console.log(pokemon)
            });
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
                                        <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                                        <div class="main-button">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-2 align-self-end">
                            <div class="subscribe">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-heading">
                                            <h6>NEWSLETTER</h6>
                                            <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                                        </div>
                                        <div class="search-input">
                                            <form id="subscribe" action="#">
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..."/>
                                                    <button type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
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
