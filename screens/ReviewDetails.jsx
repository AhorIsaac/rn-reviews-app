import { StyleSheet, Text, View } from "react-native";

const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Review Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReviewDetails;
