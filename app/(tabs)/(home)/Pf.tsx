import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

interface PfInterface{
    color:string,
    setCouleur: React.Dispatch<React.SetStateAction<string>>;
}
const Pf:React.FC<PfInterface> = ({color,setCouleur}) => {
  return (
    <View style={{backgroundColor:color}}>
      <Text>Pf{color}</Text>
    </View>
  )
}

export default Pf

const Styles = StyleSheet.create({
    box:{
        borderWidth:2,
        borderColor:'black',
        width:'100%',
        marginTop:30,

    }
})