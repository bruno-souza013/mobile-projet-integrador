import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Audio } from "expo-av";
import styles from "./styles";

export default function RecordScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [audioFiles, setAudioFiles] = useState<string[]>([]);

  async function startRecording() {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert("Permissão para acessar o microfone é necessária!");
        return;
      }

      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await newRecording.startAsync();
      setRecording(newRecording);
    } catch (error) {
      console.error("Erro ao iniciar gravação:", error);
    }
  }

  async function stopRecording() {
    if (recording) {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      if (uri) {
        setAudioFiles((prevFiles) => [...prevFiles, uri]);
      }
      setRecording(null);
    }
  }

  async function playAudio(uri: string) {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri });
      await sound.playAsync();
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gravador de Áudio</Text>


      <FlatList
        data={audioFiles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.audioItem}>
            <Text style={styles.audioText}>Áudio {index + 1}</Text>
            <TouchableOpacity style={styles.playButton} onPress={() => playAudio(item)}>
              <Text style={styles.playButtonText}>Reproduzir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma gravação disponível</Text>}
      />

    
      <TouchableOpacity
        style={[styles.recordButton, recording ? styles.recording : null]}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.recordButtonText}>{recording ? "Parar" : "Gravar"}</Text>
      </TouchableOpacity>
    </View>
  );
}