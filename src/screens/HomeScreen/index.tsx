import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles"; 

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Usuário!</Text>
      <Text style={styles.subtitle}>Bem-vindo ao Calm Wave.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RecordScreen")} 
      >
        <Text style={styles.buttonText}>Ir para o Gravador</Text>
      </TouchableOpacity>
    </View>
  );
}