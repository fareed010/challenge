import { useState, useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"
import FilterButton from "./FilterButton";
import FilterSearch from "./FilterSearch";
import SelectedTableUI from "./SelectedTableUI";
import "./styles.css";


const CharacterUI = () => {                                             
    const { state, dispatch } = useContext(CharactersContext)

    const handleCharacterRow = (e) => {
        dispatch({type: "SELECTED_CHARACTER_TABLE", payload: e})   
    }

    return (
        <>
            <SelectedTableUI />

            <FilterSearch />
            <FilterButton />

            <br />
            <br />
            <br />

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
                
                <tbody>
                    {
                    state.data.map(item => {
                        return (
                        <tr id={item.id} onClick={() => handleCharacterRow(item.id)} key={item.id}>
                            <td> <img src={item.thumbnail} alt={item.name} />{item.name}</td>
                            <td>
                            {
                                item.tags?.map((tag, idx) => {
                                return (
                                    <span key={idx} style={{ marginRight: '8px', borderColor: 'blue', border: 1, borderStyle: 'solid' }}>{tag.tag_name}</span>
                                )
                                })
                            }
                            </td>

                            {item.abilities.map((ability, idx) => {
                            return (
                                <td style={{color: ability.abilityScore === 10 ? 'red' : ''}} key={idx}>{ability.abilityScore}</td>
                            )
                            })}
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </>
    )
}

export default CharacterUI;