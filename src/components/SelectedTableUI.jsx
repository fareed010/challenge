import { useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"
import data from "../data/data.json";


const SelectedTableUI = () => {
    
    const { state } = useContext(CharactersContext);

    if (!state.selectedCharactors.length) return <p></p>;
    
    
    return (
        <div  style={{display: 'flex', gap: '10px'}}>{
            
            state.selectedCharactors.map(char => {
            const randomKey = Math.floor(Math.random() * 1000);
            const character = data.find(ch => ch.id === char);
            // console.log('charrra',character)
            
            return (
                <div key={randomKey}>
                <img src={character.thumbnail} alt="" /> 
                <p>{character.name}</p>
                </div>
            )
        })
  
      }</div>
    )

}

export default SelectedTableUI;