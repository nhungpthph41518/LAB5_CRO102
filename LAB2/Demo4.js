import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Định nghĩa thành phần con
const ChildComponent = ({ onClick }) => {
  return <Button title="Click me" onPress={onClick} />;
};

// Định nghĩa thành phần cha
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View style={{ marginTop: 40 }}>
      <Text>Count: {count}</Text>
      <ChildComponent onClick={handleClick} />
    </View>
  );
};

export default ParentComponent;
