import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  type: "PRIMARY" | "SECONDARY";
  bgColor?: string;
  fgColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  type,
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text style={[styles[`text_${type}`], fgColor ? {color:fgColor}: {}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_SECONDARY: {
  },
  text_PRIMARY: {
    color: "white",
    fontWeight: "bold",
  },
  text_SECONDARY: {
    color: "gray",
    fontWeight: "bold",
  },
});
