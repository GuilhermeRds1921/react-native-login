import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { CustomInput } from "../../src/components/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const forgotPassword = () => {
    console.warn("Forgot password");
  };

  const facebook = () => {
    console.warn("Facebook");
  };

  const google = () => {
    console.warn("Google");
  };

  const apple = () => {
    console.warn("Apple");
  };

  const singUp = () => {
    console.warn("Sing Up");
  };

  return (
    <ScrollView>
      <Text style={styles.root}>Login Page</Text>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder={"Username"}
        secureTextEntry={false}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignInPressed} text={"Sing In"} type="PRIMARY" />
      <CustomButton
        onPress={forgotPassword}
        text="Forgot passwrord?"
        type="SECONDARY"
      />
      <CustomButton
        onPress={facebook}
        text={"Sing In with Facebook"}
        type="PRIMARY"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={google}
        text={"Sing In with Google"}
        type="PRIMARY"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={apple}
        text={"Sing In with Apple"}
        type="PRIMARY"
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
      <CustomButton
        onPress={singUp}
        text={"Don't have an account? Sing Up"}
        type="SECONDARY"
      />
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
