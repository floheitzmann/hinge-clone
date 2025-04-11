import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Heart, MessageSquare, Star } from 'lucide-react-native';
import { Image } from 'expo-image';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const iz = 28;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F9F7F6",
        tabBarInactiveTintColor: "#747474",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: "#1A1A1A",
            position: 'absolute',
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
            paddingHorizontal: 16,
          },
          default: {
            backgroundColor: "#1A1A1A",
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
            paddingHorizontal: 16,
          }
        })
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({  size, color }) => <Image source={require("../../assets/images/hinge.png")} style={{ height: iz - 2, width: iz + 2, tintColor: color }}/>
        }}
      />
      <Tabs.Screen
        name="standouts"
        options={{
          title: 'Standouts',
          tabBarIcon: ({ color }) => <Star color={color} size={iz} strokeWidth={3}/>
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          title: 'Likes',
          tabBarIcon: ({ color }) => <Heart color={color} size={iz} strokeWidth={3}/>
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color }) => <MessageSquare color={color} size={iz} strokeWidth={3}/>
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                height: iz,
                width: iz,
                borderRadius: 16,
                borderWidth: focused ? 2 : 0,
                borderColor: focused ? "#F9F7F6" : "transparent",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: "https://images.pexels.com/photos/9788264/pexels-photo-9788264.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }}
                style={{
                  height: focused ? iz * 0.8 : iz,
                  width: focused ? iz * 0.8 : iz,
                  borderRadius: 16,
                }}
              />
            </View>
          )
        }}
      />
    </Tabs>
  );
}
