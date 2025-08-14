import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Input } from "../components/input/Input";
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";
import { useState } from "react";
import axios from "axios";

export default function Index() {
  
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({})
  // const [Aparcer, setAparecer] = useState(false)

  async function consultarCep() {
    try {
      if(cep !== "" && cep.length === 8){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        console.log(jsonCep);
      }else{
        alert("O cep está incorreto. Digite com 8 números")
      }      
    } catch (error) {
      console.log(error);
    }
  }
  // function AparecerCard(){
  //   if (consultarCep !== null) {
      
  //   }
  // }




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
          <Input valorCep={cep} onChangeValorCep={e => {setCep(e); console.log(e);}}/>
          {/* 2.3. Botão */}
          <Botao tituloBotao='Consultar' onPress={consultarCep}/>
          {/* 2.4. Card de informações */}
          {jsonCep.cep &&
          <Card 
          cep = {jsonCep.cep}
          logradouro = {jsonCep.logradouro} 
          bairro = {jsonCep.bairro}
          uf = {jsonCep.uf}
          estado = {jsonCep.estado}
          regiao = {jsonCep.regiao}
          />
          }
          {/*style={styles.card}}*/}
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
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
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
