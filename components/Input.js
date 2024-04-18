import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ value, setValue, placeholder, iconName }) => {
    return (
        <View style={styles.container}>
            {iconName && (
                <View style={styles.iconContainer}>
                    <Icon name={iconName} size={20} color="gray" style={styles.icon} />
                </View>
            )}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    iconContainer: {
        paddingRight: 5, // Espacio entre el icono y el input
        borderRightWidth: 2,
        borderColor: '#e8e8e8', // Color de la línea de separación
    },
    icon: {},
    input: {
        flex: 1,
        marginLeft: 5,
    },
});

export default Input;
