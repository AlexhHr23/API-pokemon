import { Button } from "./components/Button"
import './sass/App.scss'
import { TiArrowBackOutline } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";

import { useState } from "react";


const App = () => {
    const [pokemonId, setPokemonId] = useState(1);
    
    return(
        <> 
            {/*tarjetas*/}
            <div className="buttons-container">
                <Button 
                    icon={<TiArrowBackOutline/>} hadleClick={() => {setPokemonId(pokemonId - 1)}}
                />
                {pokemonId}
                <Button 
                icon={<TiArrowForwardOutline/>}
                hadleClick={() => {setPokemonId(pokemonId + 1)}}
                />
            </div>
        </>
    )
}

export {App}