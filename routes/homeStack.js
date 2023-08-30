import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, ReviewDetails } from "../screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Overview 🏠" }}
        />
        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{ title: "Review Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
