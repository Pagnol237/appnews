import { createContext,ReactNode,useState,useContext } from "react";
import React from 'react'


//definition des types pour les valeurs du context 
interface SelectedBoxContextInterface {
    selectedBox:number, 
    setSelectedBox:(value:number)=>void
}

// creation du context
const SelectedBoxContext = createContext<SelectedBoxContextInterface|undefined>(undefined);



export const SelectedBoxContextProvider=({children}:{children:ReactNode})=>{

     const [selectedBox, setSelectedBox]= useState<number>(0);
    return(
       <SelectedBoxContext.Provider value={{selectedBox,setSelectedBox}}>
            {children}
       </SelectedBoxContext.Provider>
    )
}


//hook personaliser pour l'utilisation de notre context
export const useSelectedBox=()=>{
    const selectContext = useContext(SelectedBoxContext );
    if (!selectContext) throw new Error ("une erreur d\'utilsation du contexte c\'est produite ");
        return selectContext;
}