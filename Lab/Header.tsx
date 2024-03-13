import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  headerText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://loremflickr.com/640/480/food',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.greetingText}>Chào ngày mới</Text>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 70,
    paddingLeft: 20,
    backgroundColor: 'tomato',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: 18,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;