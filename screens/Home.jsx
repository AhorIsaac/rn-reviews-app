import { useState } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

const Home = ({ navigation }) => {
  const dataArray = [
    {
      title: "Introduction to JavaScript",
      body: "Learn the fundamentals of JavaScript programming.",
      rating: 4.8,
      key: "js_intro",
    },
    {
      title: "Mastering React Framework",
      body: "In-depth guide to building modern web applications with React.",
      rating: 3.5,
      key: "react_master",
    },
    {
      title: "Python for Data Science",
      body: "Unlock the power of data analysis using Python.",
      rating: 4.7,
      key: "py_data_science",
    },
    {
      title: "Healthy Cooking Recipes",
      body: "Explore a collection of nutritious and delicious recipes.",
      rating: 3.2,
      key: "healthy_recipes",
    },
    {
      title: "Traveling on a Budget",
      body: "Tips and tricks for traveling the world without breaking the bank.",
      rating: 2.0,
      key: "budget_travel",
    },
  ];

  const [reviews, setReviews] = useState(dataArray);
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={globalStyles.container}>
      {/* modal */}
      <Modal visible={openModal} animationType="slide">
        <View style={styles.modalContent}>
          {/* modal toggle : close */}
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setOpenModal(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />

          <Text>Hello from modal 😃</Text>
        </View>
      </Modal>
      {/* end of modal */}

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setOpenModal(true)}
        style={styles.modalToggle}
      />

      <Text style={globalStyles.headerText}>All Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#17a",
    color: "#f8f9fa",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
