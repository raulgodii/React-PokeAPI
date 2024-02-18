
import { Link, useEffect } from "react";
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, doc, setDoc, getDocs, orderBy, limit, query, where } from "firebase/firestore";

function Game() {
    let [pokemonMaquetado, setPokemonMaquetado] = useState();
    let [puntuation, setPuntuation] = useState(0);
    let [top, setTop] = useState(0);
    let [bestPuntuation, setBestPuntuation] = useState(0);
    let [topPlayers, setTopPlayers] = useState();
    let solution;

    useEffect(() => {
        initGame();
        loadTop();
    }, []);

    function loadTop() {
        const pokeapiDB = query(collection(db, "pokeapi"), orderBy("puntuation", "desc"), limit(5));
        const puntuations = [];

        getDocs(pokeapiDB).then((data) => {
            data.forEach((doc) => {
                puntuations.push(doc.data());
            });
            setTop(puntuations);
            console.log(auth.currentUser)


            getDocs(query(collection(db, "pokeapi"), where("uid", "==", auth.currentUser.uid))).then(data => {
                setBestPuntuation(data.docs[0].data().puntuation);
                bestPuntuation = data.docs[0].data().puntuation;
                console.log("BEST PUNTUATION: " + bestPuntuation);
            }).catch(() => {
                setBestPuntuation(0);
                console.log("BEST PUNTUATION errorrrrr");
            });

            setTopPlayers(
                <div class="section most-played">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="section-heading">
                                    <h6>TOP PLAYERS</h6>
                                    <h2>BEST RESULTS</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                            </div>

                            {
                                puntuations.map((player, index) => (
                                    <div class="col-lg-2 col-md-6 col-sm-6" key={index}>
                                        <div class="item" >
                                            <div class="thumb">
                                                <a href="product-details.html"><img src={player.photoURL ? player.photoURL : './public/images/user.jpg'} alt="" /></a>
                                            </div>
                                            <div class="down-content">
                                                <span class="category">{player.puntuation} points</span>
                                                <h4>{player.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            );

        });
    };

    function initGame() {

        cargarPokemons()
            .then((pokemons) => {
                // Seleccionar un pokemon aleatorio
                solution = pokemons[Math.floor(Math.random() * pokemons.length)];

                setPokemonMaquetado(
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <img className="imgShowdown imgShow" src={solution.image} alt={solution.name} />
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

    function restartGame() {
        puntuation = 0;
        setPuntuation(0);
        initGame();
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
                        <img className="imgShow" src={solution.image} alt={solution.name} />
                    </div>
                    <div class="search-input d-flex justify-content-center">
                        <h5 style={{ color: 'green' }}>Correct!</h5><br /><br />
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

            if (puntuation > bestPuntuation) {
                console.log('PUNTUATION: ' + puntuation);
                console.log('BEST: ' + bestPuntuation);
                const user = auth.currentUser;
                if (user) {
                    const uid = user.uid;
                    const displayName = user.displayName;
                    const photoURL = user.photoURL;
                    const pokeapiDB = collection(db, "pokeapi");
                    const puntuationRef = doc(pokeapiDB, uid);
                    setDoc(puntuationRef, { uid: uid, name: displayName, photoURL: photoURL, puntuation: puntuation }).then(() => {
                        loadTop();
                    });
                }
            }


            setPokemonMaquetado(
                <div class="col-lg-12">
                    <div class="section-heading">
                        <img className="imgShow" src={solution.image} alt={solution.name} />
                    </div>
                    <div class="search-input d-flex justify-content-center">
                        <h5 style={{ color: 'red' }}>Incorrect!</h5><br /><br />
                    </div>
                    <div class="search-input d-flex justify-content-center">
                        <button class="shadow__btn btnRed mx-2">
                            {solution.name}
                        </button>
                    </div>
                </div>
            );
            setTimeout(() => {
                setPokemonMaquetado(
                    <div class="col-lg-12">
                        <div class="search-input d-flex justify-content-center">
                            <h2 style={{ color: 'red' }}>GAME OVER</h2><br /><br /><br /><br />
                        </div>
                        <div class="search-input d-flex justify-content-center">
                            <button onClick={restartGame} class="shadow__btn btnRed mx-2">
                                Restart
                            </button>
                        </div>
                    </div>
                );
            }, 2000);
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
                                        <h5>Your best: {bestPuntuation}</h5>
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

            {topPlayers}
        </>
    )
}

export default Game
