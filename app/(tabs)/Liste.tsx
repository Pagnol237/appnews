import { View, Text,ScrollView,SafeAreaView,Image} from 'react-native'
import React from 'react'
import {useArticleContext} from '@/context/saveContext'
import Styles from '@/styles/styles'
import { MotiView, MotiText } from 'moti'


const Liste = () => {
  const {article, setArticle,addArticle,removeArticle,isSaved } = useArticleContext();
  
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{paddingTop:50,paddingLeft:20,paddingRight:20}}  showsVerticalScrollIndicator={false}>
          {article.map((item,index)=>{
            return(
              
                <MotiView
                    key={index}
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
                    duration: 500,
                    }}
                    >
                      <View style={Styles. itemsListBox} >
                        <View style={Styles. itemsListBoxLeft}>
                              <Image source={{uri:item.urlToImage}} resizeMode='contain' style={{width:190, height:100}}/>
                        </View>
                        <View style={Styles. itemsListBoxRight}>
                              <Text style={Styles.TitleUneText}>{item.title}</Text>
                        </View>
                      </View>
                </MotiView>
              

              
            )
          })}
      </ScrollView>
    </SafeAreaView>



  )
}

export default Liste