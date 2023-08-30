import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen!</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  );
};

export default Home;
