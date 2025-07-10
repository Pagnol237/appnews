import { View, Text } from 'react-native'
import React from 'react'
import {useArticleContext} from '@/context/saveContext'

const Liste = () => {
  const {article, setArticle,addArticle,removeArticle,isSaved } = useArticleContext();
  return (
    <View>
        <Text>Articles sauvegardés :</Text>
      {article.map((item) => (
        <Text key={item.id}>• {item.title}</Text>
      ))}
    </View>
  )
}

export default Liste