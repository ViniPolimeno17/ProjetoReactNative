import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Input } from "../components/input/Input";
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";

export default function Index() {
  return (
    <>
      {/* Logo + imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/ImgFundo.png")}
        style={styles.ImagemFundo}
      >
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        ></Image>
      </ImageBackground>
      {/* Campo de consulta */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* 2.1. Título */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          {/* 2.2. Input */}
          <Input/>
          {/* 2.3. Botão */}
          <Botao tituloBotao='Consultar'/>
          {/* 2.4. Card de informações */}
          <Card style={styles.card}/>
        </View>
      </ScrollView>
    </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  ImagemFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 100,
    height: 120,
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
  },
  containerScroll:{
    flex: 1.5,
    paddingBottom: 80,
    height: '100%',
    paddingTop: 50,
  }
  // card: {
  //   width: '70%',
  //   minHeight: '60%',
  //   padding: 20,
    // backgroundColor: '#000000',
    // Atende-se: Somente o elevation nao funciona em web nem ios
    // shadowColor: '#b2b2b2ff',
    // shadowOffset:{ width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,
    // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    // borderRadius: 7
  // },
});
