import { Link, Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "ERROR 404" }} />
      <View style={styles.container}>
        <Text>PÁGINA NÃO ENCONTRADA</Text>
        <Link href="/" style={styles.link}>
          <Text>Retornar a página inicial</Text>
          <Image source={require("@/assets/images/black.jpg")}/>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});