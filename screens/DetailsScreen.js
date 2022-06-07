import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from "react";


export default function DetailsScreen({ navigation, route }) {

  const [apiResult, setApiResultat] = useState([]);
  const ingredients = route.params.ingredients();

  useEffect(() => {
    let tab = [];
    for (const key in ingredients) {
      const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+ingredients[key];
      fetch(api).then( (response) => response.json() ).then( response => { 
        let ingre = response.ingredients[0]
        let img = 'https://www.thecocktaildb.com/images/ingredients/'+encodeURI(ingre.strIngredient)+'.png';
        tab.push( {ingre:ingre, img:img} );
        setApiResultat( [...apiResult,{ingre:ingre, img:img} ])
      } )
    }
  //  setApiResultat(  tab );
  },[])

  useEffect(() => {
console.log("apiResult : ", apiResult)

  },[apiResult])

  // apiResult.map( (result) =>  {console.log(result)})

  // nom du cocktail - image - recette, puis la liste des ingrédients avec les images des ingrédients
  return (
    
    <View style={styles.container}>
      <Text>nom du cocktail: {route.params.nom}</Text>
      <Text>recette: {route.params.recette}</Text>
      <StatusBar style="auto" />
      { apiResult && apiResult.map( (result) =>  (
        console.log(result, 'res'),
        <View key={apiResult.indexOf(result)} style={{backgroundColor: 'red'}}>
          <Text>Ingrédient : {result.ingre.strIngredient}</Text>
        </View>
      )) }

    <Button
      title="Retour"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
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
