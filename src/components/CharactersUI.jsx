import { useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"
import FilterButton from "./FilterButton";
import FilterSearch from "./FilterSearch";
import "./styles.css";


const CharacterUI = () => {                                             
    const {state} = useContext(CharactersContext)

    const tableCharacter = state.data.map((info, idx) => {
        const {name, abilities, tags, thumbnail} = info;
        
        const abilityTD = abilities.map(ab => <td key={ab.abilityName} style={{color: ab.abilityScore === 10 ? 'red' : ''}}>{ab.abilityScore}</td>)
        return (
            <tbody>
                <tr>
                    <td>{info.name}</td>
                    {
                        tags && tags.length > 0 ? tags.map(i => <td key={i.tag_name}>{i.tag_name}</td>) : <td key="notag">NO TAG</td>
                    }
                    {
                        abilityTD
                    }            
                </tr>
            </tbody>
        )
    })

    return (
        <>
            <FilterSearch />

            <FilterButton />

            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Tags</th>
                        <th>Power</th>
                        <th>Mobility</th>
                        <th>Technique</th>
                        <th>Survivability</th>
                        <th>Energy</th>
                    </tr>
                </thead>
                {
                    tableCharacter
                }
            </table>

        </>
    )
}

export default CharacterUI;