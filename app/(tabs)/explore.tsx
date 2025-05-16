import { Item } from "@/components/item";
import { data } from "@/constants/data";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Explore(){
    return(
        <>
        <SafeAreaView style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.seasonText}>Temporada 1</Text>
          </View>
            <FlatList style={styles.back} data={data} renderItem={({item}) => (
                <Item name={item.episodio} age={item.titulo} date={item.data}/>
            )}
            keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98fb98',
    paddingTop: 20,
  },
  center: {
    backgroundColor: '#00FF57',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    },
    seasonText: {
    color: '#009DFF',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#EEFF00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    },
  back: {
    paddingHorizontal: 10,
  },
});