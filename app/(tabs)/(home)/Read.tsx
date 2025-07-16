import { View, Text,ScrollView,Dimensions,Image,StatusBar,SafeAreaView } from 'react-native'
import React,{ useEffect,useState }  from 'react'
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
import axios from 'axios'
import { MotiView, MotiText } from 'moti'



interface infoInterface{
    urlToImage:string,
    title: string;
    publishedAt: string;
    category: string;
    index: number;
    content:string;
    description:string;
}

const Read:React.FC<infoInterface> = () => {

      const [data,setData]= useState();
      const [loading,setLoading]= useState(false);

      useEffect(()=>{
        axios.get(' https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d8025036755846d28411653765930cab')
        .then((response)=>{
            setData(response.data.articles);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        })
    },[]);
    if(loading){
        return <Text>Loading...</Text>
    }

  
 const {urlToImage,title,index,content,description} = useLocalSearchParams(); // recuperation des detaille de l'ariclepasser via les parametres
 const imageWidth = Dimensions.get('screen').width; //récupération de la largeur de l'écrant
 const articleIndex = parseInt(index as string);
 const somme= articleIndex+2;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

        <MotiView
          from={{
          translateY: -80,
          opacity:0,
          }}
          animate={{
          translateY: 0,
          opacity:1,
          }}
          transition={{
          repeatReverse: false,
          type: 'timing',
          duration: 600,
          }}
        >
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
        </MotiView>

        <View style={StylesR.articleTextContainer}>
          <View style={StylesR.socialMediaContainer}>
            <MotiView from={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{type: 'spring',duration:400,delay:600}}>
              <View style={StylesR.icon}><Fontisto name="facebook" size={20} color="black" /></View>
            </MotiView>
            <MotiView from={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{type: 'spring',duration:400,delay:670}}>
              <View style={StylesR.icon}><AntDesign name="twitter" size={20} color="black" /></View>
            </MotiView>
            <MotiView from={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{type: 'spring',duration:400,delay:720}}>
              <View style={StylesR.icon}><MaterialIcons name="email" size={20} color="black" /></View>
            </MotiView>
            <MotiView from={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{type: 'spring',duration:400,delay:770}}>
              <View style={StylesR.icon}><MaterialCommunityIcons name="share" size={20} color="black" /></View>
            </MotiView>
              
          </View>
         </View>
        <ScrollView style={{ flexGrow: 1,backgroundColor:'white',padding:20 }}>
          <MotiView
          from={{
          translateY: 80,
          opacity:0,
          }}
          animate={{
          translateY: 0,
          opacity:1,
          }}
          transition={{
          repeatReverse: false,
          type: 'timing',
          duration: 600,
          }}
          >
            <Text style={{textAlign:'justify',color:'#4f4e4e'}}>{content} {'\n'}{description}{'\n'}
              Contrairement à la croyance populaire, le Lorem Ipsum n'est pas un simple texte aléatoire. Il trouve ses racines dans un texte de la littérature latine classique datant de 45 av. J.-C., ce qui lui confère plus de 2 000 ans. Richard McClintock, professeur de latin au Hampden-Sydney College en Virginie, a recherché l'un des mots latins les plus obscurs, consectetur, dans un passage du Lorem Ipsum. En parcourant les citations de ce mot dans la littérature classique, il a découvert sa source indubitable. Le Lorem Ipsum provient des sections 1.10.32 et 1.10.33 de « De Finibus Bonorum et Malorum » (Les Extrêmes du Bien et du Mal) de Cicéron, écrit en 45 av. J.-C. Ce livre est un traité sur la théorie de l'éthique, très populaire à la Renaissance. Le premier vers du Lorem Ipsum, « Lorem ipsum dolor sit amet… », provient d'un vers de la section 1.10.32.
              Le fragment standard du Lorem Ipsum utilisé depuis le XVIe siècle est reproduit ci-dessous pour les personnes intéressées. Les sections 1.10.32 et 1.10.33 du « De Finibus Bonorum et Malorum » de Cicéron sont également reproduites dans leur version originale exacte, accompagnées des versions anglaises de la traduction de 1914 de H. Rackham.
              {'\n'}{'\n'}
              Contrairement à la croyance populaire, le Lorem Ipsum n'est pas un simple texte aléatoire. Il trouve ses racines datexte de la littérature latine classique datant de 45 av. J.-C., ce qui lui confère plus de 2 000 ans. RiMcClintock, professeur de latin au Hampden-Sydney College en Virginie, a recherché l'un des mots latins lesobscurs, consectetur, dans un passage du Lorem Ipsum. En parcourant les citations de ce mot dans la littérclassique, il a découvert sa source indubitable. Le Lorem Ipsum provient des sections 1.10.32 et 1.10.33 de « De FiBonorum et Malorum » (Les Extrêmes du Bien et du Mal) de Cicéron, écrit en 45 av. J.-C. Ce livre est un traité sthéorie de l'éthique, très populaire à la Renaissance. Le premier vers du Lorem Ipsum, « Lorem ipsum dolor sit ameprovient d'un vers de la section 1.10.32.
              Le fragment standard du Lorem Ipsum utilisé depuis le XVIe siècle est reproduit ci-dessous pour les personnes intéressées. Les sections 1.10.32 et 1.10.33 du « De Finibus Bonorum et Malorum » de Cicéron sont également reproduites dans leur version originale exacte, accompagnées des versions anglaises de la traduction de 1914 de H. Rackham.
            </Text>
          </MotiView>
        </ScrollView>


    </SafeAreaView>
  )
}

export default Read