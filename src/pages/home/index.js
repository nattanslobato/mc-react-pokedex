import React, {useState, useEffect} from 'react';
import Navbar from "../../components/Navbar";
import PokemonCard from "../../components/PokemonCard";
import { BackgroundImage } from "./styles";

function Home () {
    // const [isLoading, setIsLoading] = useState(false);
    // const [pokemonName, setPokemonName] = useState([]);
    // const [pokemonInfo, setPokemonInfo] = useState([]);

    // async function hanbleGetPokemonName(){
    //     try{
    //         setIsLoading(true);
    //         const response = await api.get('pokemon', {
    //             params: {
    //                 limit: 30
    //             }
    //         })
    //     }
    //     catch(error){
    //         console.error(error);
    //     }
    //     finally{
    //         setIsLoading(false);
    //     }
    // }
    
    return (
        <div>
            <BackgroundImage/>
            <Navbar/>
            <PokemonCard/>

        </div>
    );
}

export default Home;