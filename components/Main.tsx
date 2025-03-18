import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { ReactNode } from 'react'
import Styles from '@/styles/styles'
import { LinearGradient } from 'expo-linear-gradient'


 interface mainProps {
    children: ReactNode,
 }

const Main: React.FC<mainProps> = ({children}) => {
  return (
      <LinearGradient style={Styles.gradienBox} colors={['#FFFFFF', '#fbf3f3']}>
        <SafeAreaView style={Styles.main}  >    
          {children}
        </SafeAreaView>
      </LinearGradient>
  )
}

export default Main