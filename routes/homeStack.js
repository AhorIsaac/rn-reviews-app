import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, ReviewDetails } from "../screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f8f9ff",
        },
        headerTintColor: "#17a",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
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
  );
};

export default HomeStack;
