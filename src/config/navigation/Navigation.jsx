import { StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from '@rneui/base';
import HomeStack from '../stack/HomeStack.jsx';
import ExploreStack from '../stack/ExploreStack.jsx'
import ProfileStack from '../stack/ProfileStack.jsx';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        // Retornar un Icon de React Native Elements
                        return (
                            <Icon name={iconName} type={iconType} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "#9e3cff",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ title: "Home" }}
                />


                <Tab.Screen
                    name="ExploreStack"
                    component={ExploreStack}
                    options={{ title: "Explore" }}
                />

                <Tab.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{ title: "Profile" }}
                />

            </Tab.Navigator>


        </NavigationContainer>
    )
}


const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "material-community";

    switch (routeName) {
        case "HomeStack":
            iconName = focused ? "home-circle" : "home-circle-outline";
            break;
        case "ExploreStack":
            iconName = focused ? "magnify" : "magnify";
            break;
        case "ProfileStack":
            iconName = focused ? "account-circle" : "account-circle-outline";
            break;

    }

    return { iconName, iconType };
};

const styles = StyleSheet.create({})