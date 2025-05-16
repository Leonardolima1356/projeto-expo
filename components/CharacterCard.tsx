import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
}

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <View style={styles.card}>
      <Image source={character.image} style={styles.image} />
      
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Name: {character.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Status: {character.status}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Species: {character.species}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4D9856',
    padding: 10,
    borderRadius: 12,
    width: 240,
    alignItems: 'center',
    gap: 10,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  info: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },

  infoItem: {
    backgroundColor: '#00FF40',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    fontWeight: 'bold'
  },

  infoText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
