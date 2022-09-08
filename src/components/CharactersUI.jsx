import { useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"
import FilterButton from "./FilterButton";
import FilterSearch from "./FilterSearch";

const CharacterUI = () => {                                             
    const {state} = useContext(CharactersContext)

    const tableCharacter = state.data.map(i => {
        return <p key={i.name}>{i.name}</p>
    })

    return (
        <>
            <FilterSearch />

            <FilterButton />

            {
                tableCharacter
            }

        </>
    )
}

export default CharacterUI;