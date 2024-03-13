import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <View style={{ marginTop: 40 }}>
      <TextInput ref={inputRef} />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default MyComponent;
