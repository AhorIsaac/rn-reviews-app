import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { About } from "../screens";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
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
        name="About"
        component={About}
        options={({ navigation }) => {
          return { headerTitle: () => <Header navigation={navigation} title="About Revuece 🔯" /> };
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
