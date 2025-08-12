import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image } from "react-native";
import { Input } from "../components/input/Input";
import { Botao } from "../components/botao/botao";

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
      <View style={styles.container}>
        {/* 2.1. Título */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/* 2.2. Input */}
        <Input/>
        {/* 2.3. Botão */}
        <Botao tituloBotao='Consultar'/>
        {/* 2.4. Card de informações */}
      </View>
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
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40,
  },
  titulo: {
    fontSize: 25,
  },
});
