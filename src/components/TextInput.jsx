import { StyleSheet, TextInput as NativeTextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.input];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
