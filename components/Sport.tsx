
import { View, Text,ScrollView,Dimensions,Image,Pressable} from 'react-native'
import React,{useEffect,useState} from 'react'
import Styles from '@/styles/styles'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'
import ItemsBox from './ItemsBox'
import Animated from 'react-native-reanimated' 
import 'react-native-gesture-handler'
import { MotiView, MotiText } from 'moti'
import { Link,useRouter } from 'expo-router'




interface Article {
    title: string;
    description: string;
    urlToImage: string;
    publishedAt:string;
    author:string;
    index:number;
    content:string;
  }
  
const Sport = () => {
    const router = useRouter();

    const [data,setData]= useState<Article[]>([]);
    const [loading,setLoading]= useState(false);

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
                        
                        <Pressable onPress={()=>router.navigate({
                            pathname:'/(tabs)/(home)/Read',
                            params:{
                                urlToImage: items.urlToImage,
                                title:items.title,
                                publishedAt:items.publishedAt,
                                category:items.author,
                                index:index,
                                content:items.content,
                                description:items.description
                            }
                        })} 
                        >   
                            <View style={{ overflow:'hidden',borderRadius:17,marginBottom:50}}>
                                <LinearGradient colors={[ 'rgba(0, 0, 0, 0.05)','rgb(0, 0, 0)']} style={Styles.LinearGradient}> 
                                    <Text style={Styles.BigTitle}>{items.title}</Text>
                                </LinearGradient>
                                <Image source={{uri:items.urlToImage}} style={{width:imageWidth, height:imageWidth*0.7}} />
                            </View>
                        </Pressable> 
                        :
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
                            duration: 800,
                            }}>

                            <Pressable onPress={()=>router.navigate({
                                pathname:'/(tabs)/(home)/Read',
                                params:{
                                    urlToImage: items.urlToImage,
                                    title:items.title,
                                    publishedAt:items.publishedAt,
                                    category:items.author,
                                    index:index,
                                    content:items.content,
                                }
                            })} >         
                                <ItemsBox urlToImage= {items.urlToImage} 
                                        title={items.title}
                                        publishedAt={items.publishedAt}
                                        category={items.author}
                                        description={items.description}
                                        index={index}
                                              
                                />
                           </Pressable>  
                            
                        </MotiView>
                    }
                    
                </View>
            )
        })}
    </ScrollView>
  )
}

export default Sport