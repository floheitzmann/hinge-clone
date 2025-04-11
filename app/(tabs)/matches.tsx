import { View, Text, Animated, StyleSheet, Button, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Sparkle, Sparkles, SparklesIcon, Zap } from 'lucide-react-native';
import { Image } from "expo-image";

const HEADER_HEIGHT = 60;

const Matches = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const matches = Array<any>();

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50, 80], // feel free to tweak these
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });  

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Fading Header */}
      <View style={[styles.header, { top: insets.top, }]}>
        <Animated.Text style={[styles.headerText, { opacity: headerOpacity }]}>Matches</Animated.Text>
      </View>

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Main title */}
        <Text style={styles.mainTitle}>Matches</Text>

        {
          matches.length == 0 ? (
            <View style={{ paddingHorizontal: 20, gap: 8 }}>
              <Image 
                source={require("../../assets/images/dude-chilling.png")} 
                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Du bist neu und hast noch keine Matches</Text>
              <Text style={{ textAlign: "center", fontSize: 15, color: "#4E4C4D" }}>Wenn ein Like auf Gegenseitigkeit beruht, kannst du hier chatten. Brauchst du Hilfe, um dein erstes Match zu finden?</Text>
              <View style={{ height: 16 }}/>
              <Pressable
                onPress={() => console.debug("Hello")}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#097170",
                  borderRadius: 999,
                  paddingVertical: 10,
                  borderColor: "#005350",
                  borderWidth: 1,
                }}
              >
                <Zap color={"white"}/>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Hebe dein Profil hervor</Text>
              </Pressable>    
              <Pressable
                onPress={() => console.debug("Hello 2")}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 999,
                  paddingVertical: 10,
                  borderColor: "#D4D2D1",
                  borderWidth: 1,
                }}
              >
                <Sparkles color={"black"}/>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Auf HingeX upgraden</Text>
              </Pressable>    
            </View>
          ) : (
            <></>
          )
        }
      </Animated.ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // so it's on top
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingTop: HEADER_HEIGHT + 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  item: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Matches