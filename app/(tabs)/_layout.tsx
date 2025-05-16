import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <>
    <Header/>
    <Tabs screenOptions={{tabBarStyle: {backgroundColor: '#4D9856', height: 55, borderTopWidth: 0}, 
      tabBarLabelStyle: {color: '#fff', fontWeight: 'bold', fontSize: 13},
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#fff"
      }}>
      <Tabs.Screen name="index" options={{headerShown: false, tabBarLabel: "API"}}/>
      <Tabs.Screen name='explore' options={{headerShown: false, tabBarLabel: "Cards"}}/>
    </Tabs>
    </>
  );
}