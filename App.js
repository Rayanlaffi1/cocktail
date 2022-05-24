import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import Cocktail from "./composants/Cocktail.js";
import {useState, useEffect} from "react";
export default function App() {

  const [apiResult, setApiResultat] = useState(null);
  var api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b";
  useEffect(() => {
    fetch(api).then((response) => response.json()).then( response => { setApiResultat(response.drinks);  } )
  },[])

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <ScrollView style={styles.containerScrollView}>
        {apiResult &&  apiResult.map( (result) =>  (<Cocktail ImageURL={result.strDrinkThumb} description={result.strDrink} />) ) }
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
