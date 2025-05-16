import { router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/images/logo.webp")} />
      </View>

      <View style={styles.content}>
        <Image style={styles.title} source={require("@/assets/images/rick-and-morty.webp")} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Opções</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EF0AD",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#4EAE41",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    width: 300,
    height: 80,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 40,
  },
  title: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#20F33F",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#4D9856",
    alignItems: "center",
    paddingVertical: 15,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
