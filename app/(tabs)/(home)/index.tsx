import { View, Text,Dimensions,Image,Pressable,SafeAreaView} from 'react-native'
import React from 'react'
import Main from '@/components/Main'
import Styles from '@/styles/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import Categorie from '@/components/Categorie';
import LaUne from '@/components/LaUne';


// api key  d8025036755846d28411653765930cab

const index = () => {
  const windowwidth  = Dimensions.get('window').width;
  return (
   
      <Main>
        {/* heaher qui contien le logo de l'appli , l'icône de la recherche et des réglages*/}
        <View style={Styles.headerBox}>
          <View style={Styles.logoContainer}>
            <Image source={require('@/assets/images/RCL.png')} style={{width:30, height:30}} />
          </View>

          <View style={Styles.researchContainer}>
            <View style={Styles.headerIcon1}><Ionicons name="search-outline" size={24} color="black" /></View>
            <View style={Styles.headerIcon2}><Ionicons name="settings-outline" size={24} color="black" /></View>
          </View>
        </View>
       
       {/* composant qui comporte les difféerente catégorie d'infoemation*/}
        <View style={{display:'flex',flexDirection:'column',flex:1}}>
          <Categorie/>
          <LaUne/>
        </View>
     
       
      </Main>
 
 
  )
}

export default index