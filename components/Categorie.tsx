import { View, Text,Image,ScrollView,Pressable} from 'react-native'
import React ,{useState}from 'react'
import Data from './dataCategorie'
import Styles from '@/styles/styles'
import { useSelectedBox } from '@/context/SelectedBoxContext'


const Categorie = () => {
    const {selectedBox, setSelectedBox}= useSelectedBox();
  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={Styles.categoriBox}>
        {Data.map((item, index) => (
            <Pressable key={index} style={Styles.categoriSubBox}  onPress={()=>setSelectedBox(index)}>
                <View style={[Styles.categorieIconContainer, selectedBox === index && Styles.categorieSelected]}>
                    <Image source={item.image} style={{ width:30, height:30}}/>
                </View>
                <Text style={{fontSize:11}}>{item.title}</Text>
            </Pressable>
        ))}
    </ScrollView>
  )
}

export default Categorie