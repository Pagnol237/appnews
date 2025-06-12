import { StyleSheet,Dimensions } from "react-native";

const screenWidth = Dimensions.get('screen').width; //récupération de la largeur de l'écrant
const StylesR = StyleSheet.create({
    bigImageContainer:{
        borderWidth:2,
        position:'relative',
        overflow:'hidden',
        width:screenWidth,
        
    },
    bigImageContainerTopIconContainer:{
        zIndex:10,
        position:'absolute',
        width:'100%',
        marginTop:50,
        paddingLeft:20,
        paddingRight:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
        LinearGradientR:{
        zIndex:1, 
        position:'absolute',
        bottom:1,
        width:'100%', 
        paddingTop:0,
        paddingBottom:30,
        paddingLeft:20,
        paddingRight:20,
    },

})

export default StylesR;