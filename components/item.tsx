import { StyleSheet, Text, View } from "react-native";

export const Item = ({ name, age, date }: { name: string; age: string; date: string }) => {
  return (
    <View style={styles.itemList}>
      <Text style={styles.text}>Episódio: {name}</Text>
      <Text style={styles.text}>Título: {age}</Text>
      <Text style={styles.text}>Data de Lançamento: {"\n"}{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#4D9856",
    padding: 16,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    color: "#00BFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
