import { Tabs } from 'expo-router';
import React from 'react';
import { useState } from 'react';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';




export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [selectedTab, setSelectedTab] = useState();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor:'#bfbfbf',
        headerShown: false,
       // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon:({color,focused}) => focused ? <Entypo name="home" size={23} color="red" /> : <AntDesign name="home" size={23} color="#8c8b8b" />,
        }}
      />

      <Tabs.Screen
      name='region'
      options={{
        title:'region',
        tabBarIcon:({color,focused}) => focused ? <MaterialCommunityIcons name="map-marker" size={23} color="red" />: <MaterialCommunityIcons name="map-marker-outline" size={23} color="#8c8b8b" />,
      }}
      />

      <Tabs.Screen
      name='video'
      options={{
        title:'video',
        tabBarIcon:({color,focused}) => focused?<MaterialCommunityIcons name="youtube-tv" size={23} color="red" />: <MaterialIcons name="tv" size={23} color="#8c8b8b" />
      }}
      />

      <Tabs.Screen
      name='Liste'
      options={{
        title:'ma liste',
        tabBarIcon:({color,focused}) => focused?<Ionicons name="bookmark" size={23} color="red"/>: <Ionicons name="bookmark-outline" size={23} color="#8c8b8b" />
      }}
      />

      <Tabs.Screen
      name="profile"
      options={{
        title:'profile',
        tabBarIcon: ({ color,focused }) => focused? <FontAwesome6 name="user-large" size={23} color="red" />: <FontAwesome6 name="user" size={23} color="#8c8b8b" />,
          
      }}
      />
    </Tabs>
  );
}
