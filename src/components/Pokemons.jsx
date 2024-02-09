import { useEffect, useState } from "react";

let url = "";

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);


    function cargarMas() {
        fetch(url)
            .then((response) => response.json())
            .then((datosPokemons) => {
                console.log(datosPokemons)
                setPokemons([...pokemons, ...datosPokemons.results])
                url = datosPokemons.next;
            });
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=8&limit=8")
            .then((response) => response.json())
            .then((datosPokemons) => {
                console.log(datosPokemons)
                url = datosPokemons.next;
                setPokemons([...pokemons, ...datosPokemons.results])
            });
    }, []);

    let pokemonsMaquetados = pokemons.map(pokemon =>

        <div key={pokemon.name} className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
            <div className="item">
                <div className="thumb">
                    <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt="" /></a>
                    <span className="price"><em>$36</em>$24</span>
                </div>
                <div className="down-content">
                    <span className="category">Action</span>
                    <h4>{pokemon.name}</h4>
                    <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
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
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul class="trending-filter">
                                <li>
                                    <a onClick={cargarMas} class="pointer">Show more</a>
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
