// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\Bread.jpg')} />
    <Text></Text>
    <Text style={styles.TextoInformacion}>Bienvenido "Fabian"</Text>
    <Text style={styles.TextoInformacion}>Dinero ahorrado : $40.000</Text>

    <View style={styles.row}>
      <TouchableOpacity style={[styles.TouchableOpacity]}>
        <MaterialCommunityIcons style={styles.icons} name="line-scan" />
        <Text style={styles.TouchableOpacityText}>Escaneo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.TouchableOpacity]}>
        <MaterialCommunityIcons style={styles.icons} name="wrench" />
        <Text style={styles.TouchableOpacityText}>Ajustes</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.row}>
      <TouchableOpacity style={[styles.TouchableOpacity]}>
        <MaterialCommunityIcons style={styles.icons} name="baguette" />
        <Text style={styles.TouchableOpacityText}>Inventario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.TouchableOpacity]}>
        <MaterialCommunityIcons style={styles.icons} name="chart-bar" />
        <Text style={styles.TouchableOpacityText}>Seguimiento</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  
  TextoTitulo: {
    fontSize: 60,
    marginBottom: 40,
    color: "black",
    fontWeight:"bold"
  },

  TextoInformacion: {
    color: "black",
    fontSize: 20,
    marginBottom: 20,
    fontWeight:"bold"
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
  },

  TouchableOpacity: {
    width: 120,
    height: 100,
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 4,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#4d94ff",
  },

  TouchableOpacityText: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    fontWeight:"bold"
  },

  icons: {
    fontSize: 40,
    color: "#8c66ff",
    marginTop: 10,
  },
});

export default HomeScreen;
