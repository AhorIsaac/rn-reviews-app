import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, ReviewDetails } from "../screens";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTintColor: "#17a",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Revuece 🔯" />
            ),
          };
        }}
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
