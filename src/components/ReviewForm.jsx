import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import { useCreateReview } from "../hooks/useCreateReview";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    marginTop: 10,
    backgroundColor: theme.colors.primary,
  },
});

const validationSchema = yup.object().shape({
  owner: yup.string().required("Owner name is required").trim(),
  name: yup.string().required("Repository name is required").trim(),
  rating: yup.number().required("Rating is required").min(0).max(100),
});

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const submitForm = (values) => {
    createReview(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ owner: "", name: "", rating: 0, review: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => submitForm(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <FormikTextInput
              style={styles.input}
              name="owner"
              value={values.owner}
              placeholder="Repository owner name"
              onChangeText={handleChange("owner")}
              onBlur={handleBlur("owner")}
              error={touched.owner && errors.owner}
            />

            <FormikTextInput
              style={styles.input}
              name="name"
              placeholder="Repository name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={touched.name && errors.name}
              value={values.name}
            />
            <FormikTextInput
              style={styles.input}
              name="rating"
              value={values.rating}
              keyboardType="numeric"
              placeholder="Rating between 0 and 100"
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              error={touched.rating && errors.rating}
            />
            <FormikTextInput
              name="review"
              onChangeText={handleChange("review")}
              onBlur={handleBlur("review")}
              error={touched.review && errors.review}
              value={values.review}
              style={styles.input}
              multiline={true}
              placeholder="Review"
            />
            <Pressable
              // disabled={isSubmitting}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text>Submit</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
