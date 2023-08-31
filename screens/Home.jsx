import { useState } from "react";
import { Button, Text, View, TouchableOpacity, FlatList } from "react-native";
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

  return (
    <View style={globalStyles.container}>
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

export default Home;
