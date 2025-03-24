import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import Styles from '@/styles/styles'
import { Image } from 'react-native'

interface infoInterface{
    urlToImage:string,
    title: string;
}
const ItemsBox:React.FC<infoInterface> = ({urlToImage,title}) => {
    const imageWidth = Dimensions.get('screen').width;
  return (
    <View style={Styles. itemsListBox}>
        <View style={Styles. itemsListBoxLeft}>
            <Image source={{uri:urlToImage}} resizeMode='contain' style={{width:190, height:100}}/>
        </View>

        <View style={Styles. itemsListBoxRight}><Text>{title}</Text></View>
        <Text>{title}</Text>
      
    </View>
  )
}

export default ItemsBox