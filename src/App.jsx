//components
import { Button } from "./components/Button"
import { Card } from "./components/Card";
//Styles
import './sass/App.scss'
//Icons
import { TiArrowBackOutline } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";
//hooks
import { useState } from "react";


const App = () => {
    const [pokemonId, setPokemonId] = useState(1);

    const prevClick = () => {
        (pokemonId === 1)?
        setPokemonId(1):
        setPokemonId(pokemonId - 1)
    }
    
    const nextClick = () => {
        setPokemonId(pokemonId + 1)
    }
    
    return(
        <> 
            <div className="card-container">
                <Card/>
            </div>
            <div className="buttons-container">
                <Button 
                    icon={<TiArrowBackOutline/>} 
                    hadleClick={prevClick}
                />
                {pokemonId}
                <Button 
                icon={<TiArrowForwardOutline/>}
                hadleClick={nextClick}
                />
            </div>
        </>
    )
}

export {App}