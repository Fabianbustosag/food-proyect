import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Boton = ({ onPress, text, type = "PRIMARIO", bgColor, fgColor, iconName }) => {
    return (
        <Pressable onPress={onPress} style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
        ]}>
            <View style={styles.content}>
                {iconName && <Icon name={iconName} size={20} color="white"/>}
                <Text
                    style={[
                        styles.text,
                        styles[`text_${type}`],
                        fgColor ? {color: fgColor} : {},
                        iconName && { marginLeft: 10 }
                    ]}
                >
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARIO: {
        backgroundColor: '#3B71F3'
    },
    container_TERCIARIO: {},

    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERCIARIO: {
        color: 'gray'
    },
})

export default Boton;
