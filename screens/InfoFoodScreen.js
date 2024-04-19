import React from 'react';
import { View, Text, Button } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontIcon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import DetailsScreen from './DetailsScreen';


function InfoFoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Producto: Pan{'\n'}
        Categoria:{'\n'}  
        Fecha ingreso producto:{'\n'}
        Alarma: 10:10 20/04/2024 {'\n'}
        Cantidad Actual: {'\n'}
        Costo producto $2.000 {'\n'}
      </Text>
      <Button
        title="Producto Vencido"
        onPress={()=>{}}
      />
      <Text></Text>
      <Button
        title="Producto Consumido"
        onPress={()=>{}}
      />
    </View>
  );
}

export default InfoFoodScreen;
