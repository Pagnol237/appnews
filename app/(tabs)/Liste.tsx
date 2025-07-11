import { View, Text,ScrollView,SafeAreaView,Image} from 'react-native'
import React from 'react'
import {useArticleContext} from '@/context/saveContext'
import Styles from '@/styles/styles'


const Liste = () => {
  const {article, setArticle,addArticle,removeArticle,isSaved } = useArticleContext();
  
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{paddingTop:50,paddingLeft:20,paddingRight:20}}  showsVerticalScrollIndicator={false}>
          <Text>Articles sauvegardés :</Text>
          {article.map((item,index)=>{
            return(
              <View style={Styles. itemsListBox} key={index}>
                  <View style={Styles. itemsListBoxLeft}>
                        <Image source={{uri:item.urlToImage}} resizeMode='contain' style={{width:190, height:100}}/>
                  </View>
                  <View style={Styles. itemsListBoxRight}>
                        <Text style={Styles.TitleUneText}>{item.title}</Text>
                  </View>
              </View>
              

              
            )
          })}
      </ScrollView>
    </SafeAreaView>



  )
}

export default Liste