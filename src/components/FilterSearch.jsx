import { useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"

const FilterSearch = () => {
    const { dispatch } = useContext(CharactersContext)
    
    const handleSearchFilter = (e) => {
        // console.log(e.target.value)
        const value = e.target.value;
        dispatch({type: "SEARCH_FILTER", payload: value.toLowerCase()})
        console.log(value)
    }

    return (
        <>
            <input type='text' placeholder="search characters.." onChange={handleSearchFilter} />
            <br />
            <br />
        </>
    )

}

export default FilterSearch;