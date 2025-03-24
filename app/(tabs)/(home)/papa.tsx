import { View, Text,TextInput,Button} from 'react-native'
import React from 'react'
import Main from '@/components/Main'
import Styles from '@/styles/styles'
import { useState } from 'react'
import Gf from './Gf'
import { CouleurContext } from '@/hooks/CouleurContext'


const Papa = () => {
    const [couleur, setCouleur] = useState('');
    const ValueCouleurContext = {couleur:couleur};
  return (
    <CouleurContext.Provider value={ValueCouleurContext}>
        <Main>
        <Text> La couleur du jour est : <Text style = {{color:couleur}}> {couleur}</Text></Text>
        <TextInput
        style={Styles.bordure}
        placeholder='entre la couleur du jour'
        value={couleur}
        onChangeText={setCouleur}
        />
        <Button 
        title='valider'
        onPress ={()=> alert('okay')}
        />
        <Gf couleur={couleur} setCouleur={setCouleur} />
        
        </Main>
    </CouleurContext.Provider>   
  )
}

export default Papa