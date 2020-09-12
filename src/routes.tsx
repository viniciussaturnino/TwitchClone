/* eslint-disable react/prop-types */
import React from 'react';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Fontisto
                name="compass"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Esports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
