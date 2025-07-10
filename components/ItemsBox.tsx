import { View, Text,Dimensions,Pressable } from 'react-native'
import React,{useState} from 'react'
import Styles from '@/styles/styles'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useArticleContext } from '@/context/saveContext'




interface infoInterface{
    urlToImage:string,
    title : string;
    publishedAt: string;
    category: string;
    description: string;
    id: number;
}

//formatage de la dates
 const datePublication = ( date:string): string  => {

        //formatage de la date de publication ;
        const now = new Date();
        const published = new Date(date);
        const diffInSeconds = Math.floor((now.getTime() - published.getTime()) / 1000);
    
        if (diffInSeconds < 60) return `il y a ${diffInSeconds} secondes`;
        if (diffInSeconds < 3600) return `il y a ${Math.floor(diffInSeconds / 60)} minutes`;
        if (diffInSeconds < 86400) return `il y a ${Math.floor(diffInSeconds / 3600)} heures`;
        return `il y a ${Math.floor(diffInSeconds / 86400)} jours`;
    
 };

const ItemsBox:React.FC<infoInterface> = ({id,urlToImage,title,publishedAt,}) => {
    const imageWidth = Dimensions.get('screen').width;
    //vaariable contanant la date
    const relativeDate = datePublication(publishedAt);
    const [saveIndice, setSaveIndice]= useState<number[]>([]);
  const { addArticle, removeArticle, isSaved } = useArticleContext();

  const toggleSave = () => {
    if (isSaved(id)) {
      removeArticle(id);
    } else {
      addArticle({id,title,urlToImage});
    }
  };

  return (
    <View style={Styles. itemsListBox}>
        <View style={Styles. itemsListBoxLeft}>
            <Image source={{uri:urlToImage}} resizeMode='contain' style={{width:190, height:100}}/>
        </View>

        {/* texte qui s'afiche dans la page ou l'on visionne l'ensemble des article*/}
        <View style={Styles. itemsListBoxRight}>
            <Text style={Styles.TitleUneText}>{title}</Text>
            <View style={Styles.DateAnIconContainer}>
                {/* date d'émission de l'article*/}
                <Text style={{fontSize:12}} >publier {relativeDate}</Text>
                <Pressable onPress={toggleSave}>
                    {isSaved(id) ? (<Ionicons name="bookmark" size={20} color="red"/>) : (<Ionicons name="bookmark-outline" size={20} color="#8c8b8b"/>)}
                    
                </Pressable>
                
            </View>
        </View>
        
      
    </View>
  )
}

export default ItemsBox