import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number from 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(0) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
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
