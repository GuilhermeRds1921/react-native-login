import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

interface CustomInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, setValue, placeholder, secureTextEntry } ) => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
};
export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    padding: 15,
    marginVertical: 10,
    
  },
  input: {},
});
