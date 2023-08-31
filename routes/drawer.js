import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ title: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;
