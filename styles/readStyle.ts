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
        bottom:0,
        width:'100%', 
        paddingTop:0,
        paddingBottom:30,
        paddingLeft:20,
        paddingRight:20,
    },

    articleTextContainer:{
        backgroundColor:'#ffffff',
        paddingLeft:20,
        paddingRight:20,
        position:'relative',
        paddingTop:50
    },
    socialMediaContainer:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        top:-10,
        left:20

    },
    icon:{
        backgroundColor:'#f1efef',
        width:45,
        height:45,
        marginRight:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:50,
        borderWidth:3,
        borderColor:'white',
    }

})

export default StylesR;