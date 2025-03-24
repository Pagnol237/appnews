// création du contexte

import { createContext } from "react";


export const CouleurContext = createContext<{couleur:string}>({
    couleur:"",
})
// initialisation du contexte provider
// la consomation du contexte 
