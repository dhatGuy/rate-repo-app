import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { debug, getByPlaceholderText, getByText } = render(
        <SignInContainer
          onSubmit={onSubmit({ username: "dhatguy", password: "qwerty" })}
        />
      );

      // console.log(getByLabelText("Username", { selector: "input" }));
      fireEvent.changeText(getByPlaceholderText("Username"), "dhatguy");
      fireEvent.changeText(getByPlaceholderText("Password"), "dhatguy");
      fireEvent.press(getByText("Sign in"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          username: "dhatguy",
          password: "qwerty",
        });
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
