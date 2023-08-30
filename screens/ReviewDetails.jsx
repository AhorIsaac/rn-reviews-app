import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ route, navigation }) => {
  const { title, body, rating } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
    </View>
  );
};

export default ReviewDetails;
