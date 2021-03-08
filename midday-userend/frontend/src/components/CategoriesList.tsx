import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {StyleSheet,

        TextInput, 
        Text,
        FlatList,
        View,
        SafeAreaView
         } from 'react-native';
import colors from '../../colors';


export default function  CategoriesList(){

  const categories: Array<{name:string}> = [
    {name: 'Xino'},
    {name: 'Catalana'},
    {name: 'Basca'}
  ]
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} placeholder="Tipo de menú o restaurante"></TextInput>
      <Icon style={styles.search} name= "search-outline"></Icon>
      <Text style = {styles.title}>¿Qué Menú te apetece hoy?</Text>
      <SafeAreaView style = {styles.listContainer}>
      <FlatList
        style = {styles.list}
        columnWrapperStyle={{ justifyContent: "space-between"}}
        numColumns={2}
        data ={categories}
        keyExtractor = {(item => item.name)}
        renderItem={({item}) => 
      <View style = {styles.listElement}>
        <View style = {styles.nameContainer}><Text>{item.name}</Text></View>
      </View>}>
      </FlatList>
      </SafeAreaView>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  input : {
    width: '100%',
    height: 60,
    backgroundColor: colors.green,
    justifyContent: 'center',
    paddingLeft: 60,
    marginBottom: 20,
    borderRadius: 10 
  },
  title : {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 25
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  list: {
    flexDirection: 'column',
  },
  listElement: {
    width: '48%',
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    overflow:'hidden',
  },
  nameContainer: {
    backgroundColor: colors.transparentGray,
    width: '100%',
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
    fontSize: 25,
    color: 'black',
    position: 'absolute',
    left: '8%',
    top: '2%'
  }
});
