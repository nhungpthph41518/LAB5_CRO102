import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";

const Demo3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //hàm được gọi sau mỗi lần render
    console.log("Có thay đổi giá trị");
  });

  return (
    <View style={{ marginTop: 40 }}>
      <Text>Count: {count} </Text>
      <Button
        title="Tăng"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default Demo3;
