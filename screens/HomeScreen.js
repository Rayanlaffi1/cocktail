import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity,ScrollView, Text, View } from 'react-native';
import Cocktail from "../composants/Cocktail.js";
import {useState, useEffect} from "react";
export default function HomeScreen({ navigation }) {

  const [apiResult, setApiResultat] = useState(null);
  const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b";
  useEffect(() => {
    fetch(api).then((response) => response.json()).then( response => { setApiResultat(response.drinks);console.log(response.drinks)  } )
  },[])

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <ScrollView style={styles.containerScrollView}>
        {apiResult &&  apiResult.map( (result) =>  (
            <TouchableOpacity key={apiResult.indexOf(result)} onPress={() => navigation.navigate('Details', {
              nom: result.strDrink ,
              image: result.strDrinkThumb,
              recette: result.strInstructions,
              ingredients: function() { 
                let tab = [];
                for (let i = 1; i < 16; i++) {
                  if(result['strIngredient'+i] != null){
                    tab.push( encodeURI(result['strIngredient'+i]) );
                  }
                }
                return tab;
              }
              
            }) }> 
              <Cocktail  ImageURL={result.strDrinkThumb} description={result.strDrink} /> 
            </TouchableOpacity> 
          
        ) ) }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScrollView: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
  },
});
