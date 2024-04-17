// screens/DetailsScreen.js

import React from 'react';
import { FlatList, StyleSheet, View, Text, Button } from 'react-native';

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

const DetailsScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
        data={[
            {key: 'Manzana'},
            {key: 'Plátano'},
            {key: 'Fresa'},
            {key: 'Uva'},
            {key: 'Naranja'},
            {key: 'Pera'},
            {key: 'Melón'},
            {key: 'Sandía'},
            {key: 'Papaya'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  };

export default DetailsScreen;
