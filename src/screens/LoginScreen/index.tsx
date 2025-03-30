import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Email:", email);
    console.log("Senha:", password);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.separatorText}>ou logar com</Text>

      {/* Contêiner para alinhar os botões horizontalmente */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/google.png")} style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/facebook.png")} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}