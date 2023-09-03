import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            {/* title input */}
            <TextInput
              style={globalStyles.input}
              placeholder="Add review title"
              onChangeText={handleChange("title")}
              value={values.title}
            />

            {/* body input */}
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Add review body"
              onChangeText={handleChange("body")}
              value={values.body}
            />

            {/* rating input */}
            <TextInput
              style={globalStyles.input}
              placeholder="Add review rating"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="phone-pad"
            />

            {/* submit button */}
            <Button onPress={handleSubmit} title="submit" color="#17a" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
