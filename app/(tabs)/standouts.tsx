import { View, Text, Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Flower, Flower2 } from 'lucide-react-native'
import { Image } from "expo-image"

const Standouts = () => {
  const maxWidth = useWindowDimensions().width;
  const maxHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, }}>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Standouts</Text>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            backgroundColor: "#C5B3C9",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 999,
            borderColor: "#C2AEC6",
            borderWidth: 1,
          }}
        >
          <Flower size={20} fill={"#EEE1DB"} fillOpacity={1}/>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Rosen</Text>
          <Text>(0)</Text>
        </Pressable>
      </View>
      <View
        style={{ paddingHorizontal: 20, paddingVertical: 16 }}
      >
        <Text style={{ fontSize: 16 }}>Außergewöhnliche Inhalte von Leuten, die am ehesten deinem Typ entsprechen. Täglich aktualisiert. <Text style={{ fontWeight: "bold" }}>Weitere Informationen.</Text></Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{
          paddingBottom: maxHeight * 0.05, // try reducing this!
        }}
        style={{
          paddingLeft: 20,
        }}
      >
        <View style={{...styles.container, width: maxWidth - 80, height: "auto" }}>
          {/* Countdown Bar */}
          <View style={styles.timerBadge}>
            <Text><Text style={{ fontWeight: "bold" }}>Nächste Aktualisierung in</Text> 8:44</Text>
          </View>

          {/* Inner layout to push avatar down */}
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            {/* Main Image */}
            <View style={{ paddingVertical: 24 }}>
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: "https://images.pexels.com/photos/28783453/pexels-photo-28783453.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }}
                  style={styles.mainImage}
                />
              </View>
            </View>

            {/* Profile Info */}
            <View style={styles.profileContainer}>
              <Image
                source={{ uri: "https://images.pexels.com/photos/28783453/pexels-photo-28783453.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }}
                style={styles.avatar}
              />
              <Text style={styles.name}>S</Text>
            </View>
          </View>
        </View>
        <View style={{ width: maxWidth, alignItems: "center", paddingHorizontal: 80, gap: 8 }}>
          <Image 
            source={require("../../assets/images/duck.png")} 
            style={{ height: 250, width: "100%", resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Du hast alle gesehen</Text>
          <Text style={{ fontSize: 15, textAlign: "center", color: "#4E4C4D" }}>Abonnenten erhalten täglich 2x Standouts.</Text>
          <Pressable
            onPress={() => console.debug("Hello")}
            style={{
              flexDirection: "row",
              gap: 8,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#097170",
              borderRadius: 999,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderColor: "#005350",
              borderWidth: 1,
            }}
          >
            <Text numberOfLines={1} style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Upgraden und mehr erhalten</Text>
          </Pressable>    
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  timerBadge: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    right: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Android shadow
    position: 'absolute',
    top: -12,
    zIndex: 10,
  },
  timerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  imageBox: {
    borderRadius: 16,
    overflow: "hidden",
  },
  mainImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    gap: 10,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  }
})

export default Standouts