
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
                                    <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                                    <audio id="audioPlayer" autoPlay>
                                        <source src={pokemon.cries.latest} type="audio/mpeg" />
                                        Tu navegador no soporta la etiqueta de audio.
                                    </audio>
                                    <ul>
                                        <li><span>Game ID:</span> COD MMII</li>
                                        <li><span>Genre:</span> <a href="#">Action</a>, <a href="#">Team</a>, <a href="#">Single</a></li>
                                        <li><span>Multi-tags:</span> <a href="#">War</a>, <a href="#">Battle</a>, <a href="#">Royal</a></li>
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
