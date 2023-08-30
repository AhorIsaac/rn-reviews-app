import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details Screen!</Text>
      <Button title="go back to home" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
