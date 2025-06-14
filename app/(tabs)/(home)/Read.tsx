import { View, Text,ScrollView,Dimensions,Image,StatusBar,SafeAreaView } from 'react-native'
import React,{ useEffect }  from 'react'
import { Link } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import StylesR from '@/styles/readStyle'
import Styles from '@/styles/styles'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



interface infoInterface{
    urlToImage:string,
    title: string;
    publishedAt: string;
    category: string;
    index: number;
}

const Read:React.FC<infoInterface> = () => {

  
 const {urlToImage,title,index} = useLocalSearchParams(); // recuperation des detaille de l'ariclepasser via les parametres
 const imageWidth = Dimensions.get('screen').width; //récupération de la largeur de l'écrant
 const articleIndex = parseInt(index as string);
 const somme= articleIndex+2;

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ScrollView>
        <View style={StylesR.bigImageContainer}>

          {/* code du bouton retour,like et save*/}
            <View style={StylesR.bigImageContainerTopIconContainer} >
                <View>
                  <Link href="/(tabs)/(home)">
                    <Feather name="arrow-left-circle" size={34} color="white" />
                  </Link>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Ionicons name="heart-outline" size={34} color="white" />
                  <Ionicons name="bookmark-outline" size={34} color="white" />
                </View>
            </View>
            <Image source={{uri:urlToImage as string}}  style={{width:imageWidth, height:imageWidth*0.8,zIndex:1}}/>
            <LinearGradient colors={[ 'rgba(0, 0, 0, 0.05)','rgb(0, 0, 0)']} style={StylesR.LinearGradientR}> 
              <Text style={Styles.BigTitle}>{title}</Text>
            </LinearGradient>
        </View>

        <View style={StylesR.articleTextContainer}>
          <View style={StylesR.socialMediaContainer}>
              <View style={StylesR.icon}><Fontisto name="facebook" size={20} color="black" /></View>
              <View style={StylesR.icon}><AntDesign name="twitter" size={20} color="black" /></View>
              <View style={StylesR.icon}><MaterialIcons name="email" size={20} color="black" /></View>
              <View style={StylesR.icon}><MaterialCommunityIcons name="share" size={20} color="black" /></View>
              
          </View>
          <Text>okay</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Read