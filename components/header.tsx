import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Rick and Morty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4EAE41',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFFF',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
