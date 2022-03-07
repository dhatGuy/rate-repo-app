import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import { useSignIn } from "../hooks/useSignIn";
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

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="username"
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            style={styles.input}
            error={touched.username && errors.username}
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            style={styles.input}
            secureTextEntry={true}
            error={touched.password && errors.password}
          />
          <Pressable style={styles.btn} onPress={handleSubmit}>
            <Text color={"white"} fontWeight={"bold"} style={styles.text}>
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [login] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await login({ username, password });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <SignInContainer onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
