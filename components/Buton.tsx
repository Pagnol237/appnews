import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Styles from '@/styles/styles'
import { ReactNode } from 'react'

interface btnProps{
    children: ReactNode;
}

const Buton  = ({children}:btnProps) => {
  return <Pressable style={Styles.btn}>{children}</Pressable>
  
}

export default Buton