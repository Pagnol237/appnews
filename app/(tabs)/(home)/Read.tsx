import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'


interface infoInterface{
    urlToImage:string,
    title: string;
    publishedAt: string;
    category: string;
    index: number;
}

const Read:React.FC<infoInterface> = () => {
 const {urlToImage,title} = useLocalSearchParams();
  return (
    <View>
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Link href="/(tabs)/(home)"><Text>back</Text></Link> 
      <Text> le titre est : {title}</Text>
    </View>
  )
}

export default Read