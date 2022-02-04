import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#808080",
    padding: 10,
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
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      {/* <Text>The sign in view</Text> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View style={styles.container}>
            <FormikTextInput
              style={styles.input}
              name="username"
              placeholder="Username"
            />
            <FormikTextInput
              style={styles.input}
              secureTextEntry={true}
              name="password"
              placeholder="Password"
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text color={"white"} fontWeight={"bold"} style={styles.text}>
                Sign in
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
