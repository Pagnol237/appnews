import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    main:{
        flex:1,
        marginTop:60,
        paddingLeft:16,
        paddingRight:16,

    },
    headerBox:{
        display:'flex',
        flexDirection:'row'
    },
    logoContainer:{
        width:'80%',
    },
    researchContainer:{
        display:'flex',
        flexDirection:'row',
        flexGrow:1,
        justifyContent:'space-between',
    },
    headerIcon1:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    headerIcon2:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    },

    //categorie style

    categoriBox:{
  
       // borderWidth:1,
        //borderColor:'red',
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        height:'20%'
  
    },

    categorieIconContainer:{
        backgroundColor:'#fce7e6',
        padding:10,
        borderRadius:'100%',
    },

    categorieSelected:{
        backgroundColor:'#fce7e6',
        padding:10,
        borderRadius:'100%',
        elevation:5
       
    },

    categoriSubBox:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:80,
        height:80,

    },

    // articles 

    allArticleMain:{
        flexGrow:2,
    },
    LinearGradient:{
        zIndex:1, 
        position:'absolute',
        bottom:0,width:'100%', 
        paddingTop:0,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
    },

    BigTitle:{
        color:'white',
        fontSize:20,
        fontWeight:400
    },

    //itemsList
    itemsListBox:{
       // borderColor:'#000000',
        //borderWidth:2,
        display:'flex',
        flexDirection:'row',
        marginBottom:10
        
    },
    itemsListBoxLeft:{
        //borderWidth:2,
        //borderColor:'red',
        width:'35%',
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:10
    },
    itemsListBoxRight:{
         width:'65%',
        paddingLeft:10,
    },




    gradienBox:{
        flex:1,
    },
    bordure:{
        borderWidth:1,
        marginTop:10,
    },
    btn:{
        backgroundColor:'red',
        marginTop:10,

    }


})

export default Styles;