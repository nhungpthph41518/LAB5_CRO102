
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Header = ({ name, endImage, startImage, gia, loai, ten }) => {
  const [khiclick, setkhiclick] = useState(true);
  const Click = () => {
    setkhiclick(!khiclick);
  };
  return (
    <View>
      {khiclick ? (
        <TouchableOpacity
          onPress={Click}
          style={{
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: startImage }}
            style={{ height: 30, width: 30 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            {name}
          </Text>
          <Image source={{ uri: endImage }} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={Click} style={{}}>
          <View
            style={{
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
              backgroundColor: "pink",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: startImage }}
              style={{ height: 30, width: 30 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              {name}
            </Text>
            <Image
              source={{ uri: endImage }}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View style={{ backgroundColor: "tomato", height: 200 }}>
            
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Bai1 = () => {
  return (
    <View>
      <Header
        name="Header"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=48&id=23239&format=png"
      />
      <Header
        name="Trang chủ"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=40&id=23458&format=png"
      />
      <Header
        name="Liên hệ"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=64&id=118252&format=png"
      />
      <Header
        name="Sản phẩm"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=40&id=23458&format=png"
        
      />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({});