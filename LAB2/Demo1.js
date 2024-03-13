import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Dem = () => {
  const [count, setCount] = useState(0);

  const tang = () => {
    setCount(count + 1);
  };

  return (
    <View style={{ marginTop: 40 }}>
      <Text>Số lần click: {count}</Text>
      <Button title="Tăng số" onPress={tang} />
    </View>
  );
};

export default Dem;
