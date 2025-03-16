import { Image, StyleSheet, Platform ,View,Text} from 'react-native';
import Styles from '@/styles/styles';
import Button from '@/components/Button';


export default function HomeScreen() {
  return (
    <View style={Styles.box}>
        <Text style={Styles.text}>franck pagnol</Text>
        <Button><Text>Next</Text></Button>
        <Button><Text>Prevoius</Text></Button>
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
