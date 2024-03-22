import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

const ChupAnh = () => {
  const [hasPer, setHasPer] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showDefaultImage, setShowDefaultImage] = useState(true);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPer(status === "granted");
    })();
  }, []);

  const chup = async () => {
    setShowDefaultImage(false);
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("anh da duoc chup: ", photo.uri);
      setCapturedImage(photo);
    }
  };

  return (
    <View style={styles.container}>
      {hasPer ? (
        <View style={styles.cameraContainer}>
          {showDefaultImage && (
            <Image style={styles.defaultImage} source={require("./img.png")} />
          )}
          {capturedImage && (
            <Image
              style={styles.capturedImage}
              source={{ uri: capturedImage.uri }}
            />
          )}
          {!showDefaultImage && !capturedImage && (
            <Camera
              style={styles.camera}
              ref={cameraRef}
              type={Camera.Constants.Type.back}
            />
          )}
        </View>
      ) : (
        <Text>Khong co quyen truy cap camera</Text>
      )}
      <TouchableOpacity style={styles.captureButton} onPress={chup}>
        <Text style={styles.captureText}>Chup anh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    width: 200,
    height: 200,
    borderRadius: 50,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  defaultImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  capturedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  captureButton: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
  },
  captureText: {
    color: "white",
  },
});

export default ChupAnh;
