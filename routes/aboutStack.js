import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { About } from "../screens";

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
        options={{ title: "About 📔" }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
