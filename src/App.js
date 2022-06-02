import React from 'react'
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/90651304?v=4';

const urlToMyGithub = 'https://github.com/prissnow';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo link....');
          await Linking.openURL(urlToMyGithub);
        }
      };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel='Foto do rosto de Priscila A. Neves' style={style.avatar} source={{ uri: imageProfileGithub }} />
                <Text accessibilityLabel='Nome: Priscila Andrade Neves' style={[style.defaultText, style.name]}>Priscila A. Neves</Text>
                <Text accessibilityLabel='Nickname: prissnow' style={[style.defaultText, style.nickname]}>prissnow</Text>
                <Text accessibilityLabel='Descrição: Estudante de Sistemas para Internet' style={[style.defaultText, style.description]}>Estudante de Sistemas para Internet</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column - se quisese trocar, teria que usar um flexDirection: 'row'
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100, //colocar sempre metade dos pixels da imagem
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});