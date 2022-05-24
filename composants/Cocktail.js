import { StyleSheet,ActivityIndicator,Button,Image,Text, View} from 'react-native';
import {useState, useEffect} from "react";
const Cocktail = ({ImageURL, description}) => {
  return (
      <View style={styles.main}>
        <Image
            style={styles.borderImage}
            source={{uri:ImageURL}}
        />
        <Text style={styles.borderTexte}>Description: <Text style={{ fontWeight: 'normal' }}> {description} </Text></Text>
      </View>
  );
}
const styles = StyleSheet.create({
    main: {
        fontSize:'1rem', fontWeight: 400, backgroundColor:'transparent',color:'rgb(61, 224, 215)',width:'100%'
    },
    borderTexte: {
        fontWeight:'bold', borderWidth: 2,borderColor:'black',padding:5
    },
    borderImage: {
        height: 100,borderWidth: 2,borderColor:'black'
    },
  
});
export default Cocktail;
