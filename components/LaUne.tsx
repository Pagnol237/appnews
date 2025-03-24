import { View, Text,ScrollView,Dimensions,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import Styles from '@/styles/styles'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'
import ItemsBox from './ItemsBox'

interface Article {
    title: string;
    description: string;
    urlToImage: string;
  }
  
const LaUne = () => {

    const [data,setData]= useState<Article[]>([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        axios.get(' https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d8025036755846d28411653765930cab')
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

    const imageWidth = Dimensions.get('screen').width;

  return (
    <ScrollView style={Styles.allArticleMain} showsVerticalScrollIndicator={false}>
        {data.map((items,index)=>{
            return(
                <View key={index}>
                    {index===0?
                        <View style={{ overflow:'hidden',borderRadius:17,marginBottom:20}}>
                            <LinearGradient colors={[ 'rgba(0, 0, 0, 0.05)','rgb(0, 0, 0)']} style={Styles.LinearGradient}> 
                                <Text style={Styles.BigTitle}>{items.title}</Text>
                            </LinearGradient>
                        <Image source={{uri:items.urlToImage}} style={{width:imageWidth, height:imageWidth*0.7}} />
                        </View>
                        :
                        <ItemsBox urlToImage= {items.urlToImage} 
                                  title={items.title}
                        />
                    }
                    
                </View>
            )
        })}
      <Text>LaUne</Text>
    </ScrollView>
  )
}

export default LaUne