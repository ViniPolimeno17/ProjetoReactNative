import { View, StyleSheet, Text, ScrollView } from "react-native"

export const Card = ({cep, logradouro, bairro, uf, estado, regiao}) => {
    return(  
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>{cep}</Text>
            </View>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>{logradouro}</Text>
            </View>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>{bairro}</Text>
            </View>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>{uf}</Text>
            </View>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>{estado}</Text>
            </View>
            <View style={styles.conjunto}>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text style={styles.valor}>{regiao}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        padding: 20,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: 7,
        // gap: 20,
        // backgroundColor: '#000000',
        // Atende-se: Somente o elevation nao funciona em web nem ios
        // shadowColor: '#b2b2b2ff',
        // shadowOffset:{ width: 0, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2,
    },
    tituloValor:{
        fontWeight: 600
    },
    conjunto: {
        marginBottom: 20
    }
})