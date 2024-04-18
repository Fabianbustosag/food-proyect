import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Text } from 'react-native';
import Logo from '../assets/imgs/logo-foodcare.png';
import Input from '../components/Input';
import Boton from '../components/Boton';

const IncioSesion = () => {
    const [nombreUsuario, setUsername] = useState('');
    const [pass, setPassword] = useState('');

    const { height } = useWindowDimensions();

    //de aqui para abajo son para verficiar que los botones funcionan nomas xD

    const Boton_pressed = () => {
        console.warn("Inicio sesion entra");
    };

    const Boton_forgotPass = () => {
        console.warn("Olvidado");
    };

    const Boton_Facebook = () => {
        console.warn("Facebook");
    };

    const Boton_Correo = () => {
        console.warn("Correo");
    };

    const Boton_nuevaCuenta = () => {
        console.warn("nueva cuenta");
    };


    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Iniciar Sesion</Text>

                <Input
                    placeholder="Nombre de Usuario"
                    value={nombreUsuario}
                    setValue={setUsername}
                    iconName="account"
                />
                <Input
                    placeholder="Contraseña"
                    value={pass}
                    setValue={setPassword}
                    secureTextEntry //por alguna razon no esta ocultando la contraseña
                    iconName="lock"
                />
                <Boton text="Iniciar Sesion" onPress={Boton_pressed} />

                <Boton
                    text="Olvide mi contraseña"
                    onPress={Boton_forgotPass}
                    type="TERCIARIO"
                />

                <Boton
                    text="Ingresar con Facebook"
                    onPress={Boton_Facebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                    iconName="facebook"
                />
                <Boton
                    text="Ingresar con Correo"
                    onPress={Boton_Correo}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                    iconName="gmail"
                />

                <Boton
                    text="Crear cuenta nueva"
                    onPress={Boton_nuevaCuenta}
                    type="TERCIARIO"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 30,
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
    }
})

export default IncioSesion;