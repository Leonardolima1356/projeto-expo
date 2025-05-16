import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  interface Character {
    name: string;
    status: string;
    species: string;
    image: string;
  }

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {characters.map(char => (
          <CharacterCard key={char.image} character={char} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#9EF0AD",
  },
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 40,
    gap: 20,
    alignItems: "center",
  }
});
