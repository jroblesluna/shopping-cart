import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Div, Text, Icon} from 'react-native-magnus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type BottomTabsParams = {
  ProfileScreen: undefined;
  SearchScreen: undefined;
  SettingsScreen: undefined;
};

type MaterialTopTabsParams = {
  FavoritesScreen: undefined;
  HistoryScreen: undefined;
};

const TopTabs = createMaterialTopTabNavigator<MaterialTopTabsParams>();

const TopTabScreen = () => {
  return (
    <Div flex={1} alignItems="center" justifyContent="center">
      <Text>Esto es una material top tabs</Text>
    </Div>
  );
};

const Screen = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="FavoritesScreen" component={TopTabScreen} />
      <TopTabs.Screen name="HistoryScreen" component={TopTabScreen} />
    </TopTabs.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomTabsParams>();
// const TabMaterial = createMaterialBottomTabNavigator<BottomTabsParams>();

export const BottomTabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileScreen"
        component={Screen}
        options={{
          tabBarIcon({color, focused, size}) {
            return (
              <Icon
                fontFamily="Ionicons"
                name={focused ? 'person' : 'person-outline'}
                color={color}
                fontSize={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Screen}
        options={{
          tabBarIcon({color, focused, size}) {
            return (
              <Icon
                fontFamily="Ionicons"
                name={focused ? 'search' : 'search-outline'}
                color={color}
                fontSize={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={Screen}
        options={{
          tabBarIcon({color, focused, size}) {
            return (
              <Icon
                fontFamily="Ionicons"
                name={focused ? 'settings' : 'settings-outline'}
                color={color}
                fontSize={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
