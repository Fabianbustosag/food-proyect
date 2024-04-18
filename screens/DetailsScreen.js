// screens/DetailsScreen.js

import React from 'react';
import { Image, FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import { Icon } from '@rneui/themed';
// import { Icon } from 'react-native-elements'
// import SvgUri from 'react-native-svg-uri';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const DetailsScreen = () => (
  <>
    <ListItem bottomDivider>
      <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\Bread.jpg')} />
      <ListItem.Content>
        <ListItem.Title>Pan</ListItem.Title>
        <ListItem.Subtitle>Estado: Bueno</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Info"
        onPress={()=>{} } />
    </ListItem>


    <ListItem bottomDivider>
      <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\platano.jpg')} />
      <ListItem.Content>
        <ListItem.Title>Platano</ListItem.Title>
        <ListItem.Subtitle>Estado: Bueno</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Info"
        onPress={()=>{} } />
    </ListItem>


    <ListItem bottomDivider>
      <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\Jamon.jpg')} />
      <ListItem.Content>
        <ListItem.Title>Mortadela</ListItem.Title>
        <ListItem.Subtitle>Estado: Bueno</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Info"
        onPress={()=>{} } />
    </ListItem>


    <ListItem>
      <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\naranja.jpg')} />
      <ListItem.Content>
        <ListItem.Title>Naranja</ListItem.Title>
        <ListItem.Subtitle>Estado: Bueno</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Info"
        onPress={()=>{} } />
    </ListItem>
  </>
);

export default DetailsScreen;
