import { useState,useContext,createContext,ReactNode} from "react";

// typage d'un article 
export interface IsaveArticle{
    id:number,
    title:string,
    urlToImage:string,
}


// interface du contexte 

interface IsaveArticleContext {
  article: IsaveArticle[],
  setArticle: (value: IsaveArticle[]) => void,
  addArticle: (article: IsaveArticle) => void,
  removeArticle: (id: number) => void,
  isSaved: (id: number) => boolean,
}
//creation de notre context 
const ArticleContext = createContext<IsaveArticleContext|undefined>(undefined);

//provider
export const SaveArticleContextProvider = ( {children}:{children:ReactNode})=>{

const [article,setArticle] = useState<IsaveArticle[]>([]);
  const addArticle = (newArticle: IsaveArticle) => {
    if (!article.find(a => a.id === newArticle.id)) {
      setArticle([...article, newArticle]);
    }
  };

  const removeArticle = (id: number) => {
    setArticle(article.filter(a => a.id !== id));
  };

  const isSaved = (id: number) => {
    return article.some(a => a.id === id);
  };


return (
    <ArticleContext.Provider value={{article, setArticle,addArticle,removeArticle,isSaved}}>
        {children}
    </ArticleContext.Provider>
)


}

//hook personaliser pour utiliser le provider

export const useArticleContext = ()=>{
    const  useArticle = useContext(ArticleContext);

    if(useArticle == undefined){
        throw new Error (" veiller utiliser le context dans un provider")   
    }
    return useArticle;
}

