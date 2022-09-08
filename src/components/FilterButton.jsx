import { useContext } from "react";
import {CharactersContext} from "../context/CharacterContext"
import data from "../data/data.json";

const FilterButton = () => {
    const { dispatch } = useContext(CharactersContext)
    const tagsCollection = [];
    const removeDuplicatedTag = [];

    // get all tags into a new tag collections
    data.map((item) => {
        const { tags } = item;
        if(tags && tags?.length > 0){
            tags.forEach(i => tagsCollection.push(i.tag_name))
        }                    
    })
    // console.log("Not Removed Duplicates", tagsCollection)

    // remove duplicated tags
    tagsCollection.forEach(i => {
        if(!removeDuplicatedTag.includes(i)) removeDuplicatedTag.push(i)
    })
    

    // console.log("Removed Duplicates", removeDuplicatedTag)
    
    
    const handleTagClick = (e) => {
        // console.log(e.target.value)
        dispatch({type: "TAG_CLICKED_FILTER", payload: e.target.value})
    }

    const buttons = removeDuplicatedTag.map(i => {
        return <button key={i} onClick={handleTagClick} value={i}>{i}</button>
    })


    return (
        <div>
            {data && buttons}
        </div>
    )


}

export default FilterButton;