import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import React from "react";


const L22sectionView = ({
  diadiem,
  thoiGian,
  phuongTien,
  time,
  image,
  title,
  imagesc,
  titleTG,
  titlePT,
  titleTime,
  chiTiet,
  tenKS,
  tenKSText,
  thoiGianMC,
  titleTGMC,
  dd,
  ddText,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
          Lịch Trình
        </Text>
        <View style={styles.khoi1}>
          <Text>{diadiem}</Text>
          <Text style={styles.title}>{title}</Text>

          <Text>{thoiGian}</Text>
          <Text style={styles.title}>{titleTG}</Text>

          <Text>{phuongTien}</Text>
          <Text style={styles.title}>{titlePT}</Text>

          <Text>{time}</Text>
          <Text style={styles.title}>{titleTime}</Text>

          <Text>{image}</Text>
          <Image
            source={{ uri: imagesc }}
            style={{ height: 120, width: 300 }}
          />
        </View>

        {/* khối 2 */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Khách Sạn
        </Text>

        <View style={styles.khoi1}>
          <Text>{tenKS}</Text>
          <Text style={styles.title}>{tenKSText}</Text>

          <Text>{thoiGianMC}</Text>
          <Text style={styles.title}>{titleTGMC}</Text>

          <Text>{dd}</Text>
          <Text style={styles.title}>{ddText}</Text>

          <Text>{chiTiet}</Text>
          <TouchableOpacity>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const Lab12 = () => {
  return (
    <View style={styles.container}>
      <L22sectionView
        diadiem="Địa điểm"
        title="Hồ Tràm, Vũng Tàu"
        thoiGian="Thời gian"
        titleTG="09:00 AM - 12:00 AM, 12/12/2014"
        phuongTien="Phương tiện di chuyển"
        titlePT="Xe bus"
        time="Thời gian"
        titleTime="21:00 - 22:00"
        image="Hình ảnh"
        imagesc="https://loremflickr.com/640/480/food"
        tenKS="Tên khách sạn"
        tenKSText="Hồng Quỳnh"
        thoiGianMC="Giờ mở cửa"
        titleTGMC="09:00 AM - 12:00 AM"
        dd="Địa điểm"
        ddText="234 Quang Trung, Hồ Chí Minh"
        btnChiTiet="Chi Tiết"
      />
    </View>
  );
};

export default Lab12;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff0f5" },
  title: { fontSize: 20, paddingBottom: 10, },

  khoi1: {
    height: "auto",
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Đây là thuộc tính duy nhất chỉ sử dụng trên Android
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#cd5c5c",
    height: 50,
    color: "white",
    paddingTop: 13,
  },
});
