import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Pf from './Pf'

interface colorInterface{
    couleur:string,
    setCouleur: React.Dispatch<React.SetStateAction<string>>;
}

const Gf:React.FC<colorInterface> = ({couleur,setCouleur}) => {
  return (
    <View style={Styles.box}>
      <Text>Gf</Text>
      <Pf couleur={couleur} setCouleur={setCouleur}/>
    </View>
  )
}

export default Gf

const Styles = StyleSheet.create({
    box:{
        borderWidth:2,
        borderColor:'grey',
        width:'100%',
        marginTop:10,

    }
})