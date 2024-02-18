
import { Link, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    let { id } = useParams();

    let [pokemonMaquetado, setPokemonMaquetado] = useState();
    const [preload, setPreload] = useState();

    useEffect(() => {
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
        fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
            .then((response) => response.json())
            .then((pokemon) => {
                console.log(pokemon)
                setPokemonMaquetado(

                    <div className="single-product section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left-image">
                                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <h4 style={{ textTransform: 'uppercase' }}>{pokemon.name}</h4>
                                    <span className="price">{pokemon.id}</span>


                                    <audio id="audioPlayer" autoPlay>
                                        <source src={pokemon.cries.latest} type="audio/mpeg" />
                                        Tu navegador no soporta la etiqueta de audio.
                                    </audio>

                                    <ul>

                                        {pokemon.types.map((type) => (
                                            <button class="shadow__btn mx-2">{type.type.name}</button>
                                        ))}

                                        <li><span>Height: </span>{pokemon.height}</li>
                                        <li><span>Weight: </span>{pokemon.weight}</li>
                                        <li><span>Moves: </span>{
                                            pokemon.moves.map((move) => (
                                                move.move.name + ', '
                                            ))
                                        }</li>
                                        {
                                            pokemon.abilities.map((ability, index) => (
                                                <li key={index}><span>Ability {index + 1}:</span> {ability.ability.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                    <div className="sep"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

                setPreload(
                    <></>
                );
            });
    }, []);


    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Detail</h3>
                            <span className="breadcrumb"><a href="#">Home</a> &gt; Detail</span>
                        </div>
                    </div>
                </div>
            </div>

            {pokemonMaquetado}
            {preload}
        </>
    )
}

export default Detail
