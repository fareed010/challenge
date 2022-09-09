import React, { useReducer, createContext } from 'react';
import data from '../data/data.json';

export const CharactersContext = createContext({});

const stateReducer = (state = [], action) => {
  const {type, payload} = action;
  switch(type){
    case "TAG_CLICKED_FILTER":
        const filterClickedTags = data.filter((chara) => {
            // store and remove duplicated tags
            const tagsCollection = [];
            const removeDuplicatedTag = [];

            const { tags } = chara;
            if(tags && tags?.length > 0){
                tags.forEach(i => tagsCollection.push(i.tag_name))
            }  
        
            // filter by tags
            tagsCollection.forEach(i => {
                if(!removeDuplicatedTag.includes(i)) removeDuplicatedTag.push(i)
            })

            if(removeDuplicatedTag.length){
              return removeDuplicatedTag.some(tg => tg === payload);
            }
           })

        return {...state, data: filterClickedTags}
        
    case "SEARCH_FILTER":
        const filterSearch = data.filter((chara) => {
            // store and remove duplicated tags
            const tagsCollection = [];
            const removeDuplicatedTag = [];

            const { tags } = chara;
            if(tags && tags?.length > 0){
                tags.forEach(i => tagsCollection.push(i.tag_name))
            }  
        
            // filter by tags
            tagsCollection.forEach(i => {
                if(!removeDuplicatedTag.includes(i)) removeDuplicatedTag.push(i)
            })

            if(removeDuplicatedTag.length){
                return removeDuplicatedTag.some(tg => {
                    if(tg.toLowerCase().includes(payload)){
                        return true;
                    }
                    return false;
                })
            }
            
            
           })

        return {...state, data: filterSearch}

    case "SELECTED_CHARACTER_TABLE":
        return {...state, selectedCharactors: [...state.selectedCharactors, payload]}

    
    default:
        return state    
  }
}

const characterState = {data, selectedCharactors: []};

const CharactersProvider = ({ children }) => {
    const [state, dispatch] = useReducer (stateReducer, characterState);

    return (
        <CharactersContext.Provider value={{state, dispatch}}>
        {children}
        </CharactersContext.Provider>
    );
};


export default CharactersProvider;

