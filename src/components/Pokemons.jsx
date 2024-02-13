import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let url = "https://pokeapi.co/api/v2/pokemon/?offset=8&limit=8";

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [preload, setPreload] = useState();

    useEffect(() => {
        cargarPokemons();
    }, []);

    function cargarPokemons() {
        setPreload(
            <div id="js-preloader" class="js-preloader">
                <div class="preloader-inner">
                    <span class="dot"></span>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
        
        fetch(url)
            .then((response) => response.json())
            .then((datosPokemons) => {
                const pokemonPromises = datosPokemons.results.map(pokemon => {
                    return fetch(pokemon.url)
                        .then((response) => response.json())
                        .then((datosPokemon) => {
                            console.log(datosPokemon)
                            return {
                                ...datosPokemon
                            };
                        });
                });

                Promise.all(pokemonPromises)
                    .then(pokemonsData => {
                        setPreload(
                            <></>
                        );
                        console.log(pokemonsData)
                        setPokemons(prevPokemons => [...prevPokemons, ...pokemonsData]);
                        url = datosPokemons.next;
                    });
            });
    }

    let pokemonsMaquetados = pokemons.map(pokemon =>

        <div key={pokemon.name} className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
            <div className="item">
                <div className="thumb">
                    <Link to={"/detail/" + pokemon.id}><img src={pokemon.sprites.other['official-artwork'].front_default} alt="" /></Link>
                    <span className="price">{pokemon.id}</span>
                </div>
                <div className="down-content">
                    <span className="category">{pokemon.types[0].type.name}</span>
                    <h4 style={{ textTransform: 'uppercase' }}>{pokemon.name}</h4>
                    <Link to={"/detail/" + pokemon.id}><i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
        </div>
    )


    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Pokemons</h3>
                            <span className="breadcrumb"><a href="#">Home</a> &gt; Our Shop</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <div className="search">
                            <input placeholder="Search pokemons..." type="text" />
                            <button type="submit">Search</button>
                        </div>
                    </ul>
                    <div className="row trending-box">
                        {pokemonsMaquetados}
                        {preload}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="trending-filter">
                                <li>
                                    <a onClick={cargarPokemons} className="pointer">Show more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Pokemons
