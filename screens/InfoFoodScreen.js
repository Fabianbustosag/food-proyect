import React from 'react';
import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
// import MaterialIcons frsom './DetailsScreen';


function InfoFoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 100, height: 100 }} source={require('..\\assets\\imgs\\Bread.jpg')} />
      <Text style={{ fontSize: 20 }}>
        Producto: Pan{'\n'}
        Categoria:{'\n'}  
        Fecha ingreso producto:{'\n'}
        Alarma: 10:10 20/04/2024 {'\n'}
        Cantidad Actual: {'\n'}
        Costo producto $2.000 {'\n'}
      </Text>
      <Button
      color="#f00"
        title="Producto Vencido"
        onPress={()=>{}}
      />
      <Text>{'\n'}</Text>
      <Button
            color="#32CD32"
        title="Producto Consumido"
        onPress={()=>{}}
      />
    </View>
  );
}

export default InfoFoodScreen;
